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
  PurchaseOrder,
  PurchaseOrderItem,
  PurchaseOrderStatus,
} from './entities/purchase-order.entity';
import { Inventory } from '../inventory/entities/inventory.entity';

@Injectable()
export class PurchaseOrdersService extends CrudService<PurchaseOrder> {
  constructor(
    @InjectRepository(PurchaseOrder)
    repository: Repository<PurchaseOrder>,
    @InjectRepository(PurchaseOrderItem)
    private readonly itemRepository: Repository<PurchaseOrderItem>,
    private readonly dataSource: DataSource,
  ) {
    super(repository);
  }

  async createWithItems(dto: {
    orderNumber: string;
    supplierId: string;
    warehouseId: string;
    orderDate: Date;
    expectedDate?: Date;
    description?: string;
    items: { productId: string; quantity: number; unitPrice: number }[];
  }): Promise<PurchaseOrder> {
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
      supplierId: dto.supplierId,
      warehouseId: dto.warehouseId,
      orderDate: dto.orderDate,
      expectedDate: dto.expectedDate,
      description: dto.description,
      totalAmount,
      status: PurchaseOrderStatus.DRAFT,
    });
    const saved = await this.repository.save(order);

    const items = dto.items.map((item) =>
      this.itemRepository.create({
        purchaseOrderId: saved.id,
        productId: item.productId,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        totalPrice: item.quantity * item.unitPrice,
        receivedQuantity: 0,
      }),
    );
    await this.itemRepository.save(items);

    return this.findOne(saved.id);
  }

  async approve(id: string): Promise<PurchaseOrder> {
    const order = await this.findOne(id);
    if (order.status !== PurchaseOrderStatus.DRAFT) {
      throw new BadRequestException('Only draft orders can be approved');
    }
    order.status = PurchaseOrderStatus.APPROVED;
    await this.repository.save(order);
    return this.findOne(order.id);
  }

  async cancel(id: string): Promise<PurchaseOrder> {
    const order = await this.findOne(id);
    if (
      order.status === PurchaseOrderStatus.FULLY_RECEIVED ||
      order.status === PurchaseOrderStatus.CANCELLED
    ) {
      throw new BadRequestException('Cannot cancel this order');
    }
    order.status = PurchaseOrderStatus.CANCELLED;
    await this.repository.save(order);
    return this.findOne(order.id);
  }

  async receiveItems(
    id: string,
    receivedItems: { itemId: string; receivedQuantity: number }[],
  ): Promise<PurchaseOrder> {
    const order = await this.findOne(id);
    if (
      order.status !== PurchaseOrderStatus.APPROVED &&
      order.status !== PurchaseOrderStatus.PARTIALLY_RECEIVED
    ) {
      throw new BadRequestException('Only approved orders can receive items');
    }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const invRepo = queryRunner.manager.getRepository(Inventory);

      for (const received of receivedItems) {
        const item = order.items.find((i) => i.id === received.itemId);
        if (!item) {
          throw new NotFoundException(
            `Item ${received.itemId} not found in order`,
          );
        }
        if (received.receivedQuantity <= 0) {
          throw new BadRequestException('Received quantity must be positive');
        }
        if (item.receivedQuantity + received.receivedQuantity > item.quantity) {
          throw new BadRequestException(
            `Cannot receive more than ordered quantity for product ${item.productId}`,
          );
        }

        item.receivedQuantity += received.receivedQuantity;
        await queryRunner.manager.save(item);

        let inventory = await invRepo.findOne({
          where: {
            productId: item.productId,
            warehouseId: order.warehouseId,
          },
        });
        if (!inventory) {
          inventory = invRepo.create({
            productId: item.productId,
            warehouseId: order.warehouseId,
            quantity: 0,
          });
        }
        inventory.quantity += received.receivedQuantity;
        await invRepo.save(inventory);
      }

      const allReceived = order.items.every(
        (i) => i.receivedQuantity >= i.quantity,
      );
      order.status = allReceived
        ? PurchaseOrderStatus.FULLY_RECEIVED
        : PurchaseOrderStatus.PARTIALLY_RECEIVED;
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

  async findBySupplier(supplierId: string): Promise<PurchaseOrder[]> {
    return this.repository.find({
      where: { supplierId },
      relations: { warehouse: true, items: { product: true } },
    });
  }

  async findOne(id: string): Promise<PurchaseOrder> {
    const order = await this.repository.findOne({
      where: { id },
      relations: {
        supplier: true,
        warehouse: true,
        items: { product: true },
      },
    });
    if (!order) throw new NotFoundException('Purchase order not found');
    return order;
  }
}
