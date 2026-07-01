import {
  Injectable,
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CrudService } from '../../core';
import {
  SalesOrder,
  SalesOrderItem,
  SalesOrderStatus,
} from './entities/sales-order.entity';
import { Inventory } from '../inventory/entities/inventory.entity';

@Injectable()
export class SalesOrdersService extends CrudService<SalesOrder> {
  constructor(
    @InjectRepository(SalesOrder)
    repository: Repository<SalesOrder>,
    @InjectRepository(SalesOrderItem)
    private readonly itemRepository: Repository<SalesOrderItem>,
    private readonly dataSource: DataSource,
  ) {
    super(repository);
  }

  async createWithItems(dto: {
    orderNumber: string;
    customerId: string;
    warehouseId: string;
    orderDate: Date;
    deliveryDate?: Date;
    description?: string;
    items: { productId: string; quantity: number; unitPrice: number }[];
  }): Promise<SalesOrder> {
    const existing = await this.repository.findOne({
      where: { orderNumber: dto.orderNumber },
    });
    if (existing) throw new ConflictException('Order number already exists');

    const totalAmount = dto.items.reduce(
      (sum, item) => sum + item.quantity * item.unitPrice,
      0,
    );

    const order = this.repository.create({
      orderNumber: dto.orderNumber,
      customerId: dto.customerId,
      warehouseId: dto.warehouseId,
      orderDate: dto.orderDate,
      deliveryDate: dto.deliveryDate,
      description: dto.description,
      totalAmount,
      status: SalesOrderStatus.DRAFT,
    });
    const saved = await this.repository.save(order);

    const items = dto.items.map((item) =>
      this.itemRepository.create({
        salesOrderId: saved.id,
        productId: item.productId,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        totalPrice: item.quantity * item.unitPrice,
        shippedQuantity: 0,
      }),
    );
    await this.itemRepository.save(items);

    return this.findOne(saved.id);
  }

  async confirm(id: string): Promise<SalesOrder> {
    const order = await this.findOne(id);
    if (order.status !== SalesOrderStatus.DRAFT) {
      throw new BadRequestException('Only draft orders can be confirmed');
    }
    order.status = SalesOrderStatus.CONFIRMED;
    await this.repository.save(order);
    return this.findOne(order.id);
  }

  async shipItems(
    id: string,
    shipItems: { itemId: string; shipQuantity: number }[],
  ): Promise<SalesOrder> {
    const order = await this.findOne(id);
    if (
      order.status !== SalesOrderStatus.CONFIRMED &&
      order.status !== SalesOrderStatus.SHIPPED
    ) {
      throw new BadRequestException('Only confirmed orders can ship items');
    }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const invRepo = queryRunner.manager.getRepository(Inventory);

      for (const ship of shipItems) {
        const item = order.items.find((i) => i.id === ship.itemId);
        if (!item)
          throw new NotFoundException(`Item ${ship.itemId} not found in order`);
        if (ship.shipQuantity <= 0)
          throw new BadRequestException('Ship quantity must be positive');

        const remaining = item.quantity - item.shippedQuantity;
        if (ship.shipQuantity > remaining) {
          throw new BadRequestException(
            `Cannot ship more than remaining quantity for product ${item.productId}`,
          );
        }

        const inventory = await invRepo.findOne({
          where: { productId: item.productId, warehouseId: order.warehouseId },
        });
        if (!inventory || inventory.quantity < ship.shipQuantity) {
          throw new BadRequestException(
            `Insufficient stock for product ${item.productId} in warehouse`,
          );
        }

        inventory.quantity -= ship.shipQuantity;
        await invRepo.save(inventory);

        item.shippedQuantity += ship.shipQuantity;
        await queryRunner.manager.save(item);
      }

      const allShipped = order.items.every(
        (i) => i.shippedQuantity >= i.quantity,
      );
      order.status = allShipped
        ? SalesOrderStatus.DELIVERED
        : SalesOrderStatus.SHIPPED;
      await queryRunner.manager.save(order);

      await queryRunner.commitTransaction();
      return this.findOne(order.id);
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async cancel(id: string): Promise<SalesOrder> {
    const order = await this.findOne(id);
    if (
      order.status === SalesOrderStatus.DELIVERED ||
      order.status === SalesOrderStatus.CANCELLED
    ) {
      throw new BadRequestException('Cannot cancel this order');
    }
    order.status = SalesOrderStatus.CANCELLED;
    await this.repository.save(order);
    return this.findOne(order.id);
  }

  async findByCustomer(customerId: string): Promise<SalesOrder[]> {
    return this.repository.find({
      where: { customerId },
      relations: { warehouse: true, items: { product: true } },
    });
  }

  async findOne(id: string): Promise<SalesOrder> {
    const order = await this.repository.findOne({
      where: { id },
      relations: {
        customer: true,
        warehouse: true,
        items: { product: true },
      },
    });
    if (!order) throw new NotFoundException('Sales order not found');
    return order;
  }
}
