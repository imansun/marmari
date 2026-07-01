import {
  Injectable,
  ConflictException,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CrudService } from '../../core';
import {
  SubcontractOrder,
  SubcontractOrderStatus,
  SubcontractOrderType,
} from './entities/subcontract-order.entity';
import {
  SubcontractOrderItem,
  SubcontractItemStatus,
} from './entities/subcontract-order-item.entity';
import { SubcontractMaterial } from './entities/subcontract-material.entity';

@Injectable()
export class SubcontractingService extends CrudService<SubcontractOrder> {
  constructor(
    @InjectRepository(SubcontractOrder)
    repository: Repository<SubcontractOrder>,
    @InjectRepository(SubcontractOrderItem)
    private readonly itemRepository: Repository<SubcontractOrderItem>,
    @InjectRepository(SubcontractMaterial)
    private readonly materialRepository: Repository<SubcontractMaterial>,
    private readonly dataSource: DataSource,
  ) {
    super(repository);
  }

  async createOrder(dto: {
    code: string;
    partyId: string;
    orderType: string;
    startDate: string;
    endDate: string;
    status?: SubcontractOrderStatus;
    description?: string;
    termsConditions?: string;
    items: Array<{
      productId: string;
      description?: string;
      quantity: number;
      unitPrice: number;
    }>;
    materials: Array<{
      productId: string;
      description?: string;
      quantitySent: number;
      unitPrice?: number;
    }>;
  }): Promise<SubcontractOrder> {
    const existing = await this.repository.findOne({
      where: { code: dto.code },
    });
    if (existing) throw new ConflictException('Order code already exists');

    const orderItems = dto.items.map((item) =>
      this.itemRepository.create({
        productId: item.productId,
        description: item.description,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        totalPrice: item.quantity * item.unitPrice,
        receivedQuantity: 0,
        itemStatus: SubcontractItemStatus.PENDING,
      }),
    );

    const orderMaterials = dto.materials.map((mat) =>
      this.materialRepository.create({
        productId: mat.productId,
        description: mat.description,
        quantitySent: mat.quantitySent,
        quantityUsed: 0,
        quantityReturned: 0,
        quantityWasted: 0,
        unitPrice: mat.unitPrice ?? 0,
        totalCost: (mat.unitPrice ?? 0) * mat.quantitySent,
      }),
    );

    const totalCost = orderItems.reduce((s, i) => s + Number(i.totalPrice), 0);

    const order = this.repository.create({
      code: dto.code,
      partyId: dto.partyId,
      orderType: dto.orderType as SubcontractOrderType,
      status: dto.status ?? SubcontractOrderStatus.DRAFT,
      startDate: new Date(dto.startDate),
      endDate: new Date(dto.endDate),
      description: dto.description,
      termsConditions: dto.termsConditions,
      totalCost,
      items: orderItems,
      materials: orderMaterials,
    });

    return this.repository.save(order);
  }

  async updateOrder(
    id: string,
    dto: Partial<{
      status: SubcontractOrderStatus;
      endDate: string;
      completedDate: string;
      description: string;
      termsConditions: string;
    }>,
  ): Promise<SubcontractOrder> {
    const updateData: Record<string, unknown> = {};
    if (dto.status !== undefined) updateData.status = dto.status;
    if (dto.description !== undefined) updateData.description = dto.description;
    if (dto.termsConditions !== undefined)
      updateData.termsConditions = dto.termsConditions;
    if (dto.endDate !== undefined) updateData.endDate = new Date(dto.endDate);
    if (dto.completedDate !== undefined)
      updateData.completedDate = new Date(dto.completedDate);
    await this.repository.update(id, updateData);
    return this.findOne(id);
  }

  async confirm(id: string): Promise<SubcontractOrder> {
    const order = await this.findOne(id);
    if (order.status !== SubcontractOrderStatus.DRAFT) {
      throw new BadRequestException('Only draft orders can be confirmed');
    }

    return this.dataSource.transaction(async (em) => {
      await em.update(SubcontractOrder, id, {
        status: SubcontractOrderStatus.CONFIRMED,
      });
      return em.findOneOrFail(SubcontractOrder, { where: { id } });
    });
  }

  async start(id: string): Promise<SubcontractOrder> {
    const order = await this.findOne(id);
    if (order.status !== SubcontractOrderStatus.CONFIRMED) {
      throw new BadRequestException('Only confirmed orders can be started');
    }

    return this.dataSource.transaction(async (em) => {
      await em.update(SubcontractOrder, id, {
        status: SubcontractOrderStatus.IN_PROGRESS,
      });
      return em.findOneOrFail(SubcontractOrder, { where: { id } });
    });
  }

  async receiveItems(
    id: string,
    dtos: Array<{ itemId: string; receivedQuantity: number }>,
  ): Promise<SubcontractOrder> {
    const order = await this.findOne(id);
    if (
      order.status !== SubcontractOrderStatus.IN_PROGRESS &&
      order.status !== SubcontractOrderStatus.CONFIRMED
    ) {
      throw new BadRequestException(
        'Order must be in progress or confirmed to receive items',
      );
    }

    return this.dataSource.transaction(async (em) => {
      for (const dto of dtos) {
        const item = order.items.find((i) => i.id === dto.itemId);
        if (!item) throw new NotFoundException(`Item ${dto.itemId} not found`);

        const newReceived =
          Number(item.receivedQuantity) + dto.receivedQuantity;
        const totalQty = Number(item.quantity);

        let itemStatus = SubcontractItemStatus.PARTIAL;
        if (newReceived >= totalQty)
          itemStatus = SubcontractItemStatus.COMPLETE;

        await em.update(SubcontractOrderItem, dto.itemId, {
          receivedQuantity: newReceived,
          itemStatus,
        });
      }

      return em.findOneOrFail(SubcontractOrder, { where: { id } });
    });
  }

  async complete(id: string): Promise<SubcontractOrder> {
    const order = await this.findOne(id);
    if (order.status !== SubcontractOrderStatus.IN_PROGRESS) {
      throw new BadRequestException('Only in-progress orders can be completed');
    }

    const allComplete = order.items.every(
      (i) => i.itemStatus === SubcontractItemStatus.COMPLETE,
    );
    if (!allComplete) {
      throw new BadRequestException(
        'All items must be received before completion',
      );
    }

    return this.dataSource.transaction(async (em) => {
      await em.update(SubcontractOrder, id, {
        status: SubcontractOrderStatus.COMPLETED,
        completedDate: new Date(),
      });
      return em.findOneOrFail(SubcontractOrder, { where: { id } });
    });
  }

  async cancel(id: string): Promise<SubcontractOrder> {
    const order = await this.findOne(id);
    if (
      order.status === SubcontractOrderStatus.COMPLETED ||
      order.status === SubcontractOrderStatus.CANCELLED
    ) {
      throw new BadRequestException(
        'Cannot cancel a completed or already cancelled order',
      );
    }

    return this.dataSource.transaction(async (em) => {
      await em.update(SubcontractOrder, id, {
        status: SubcontractOrderStatus.CANCELLED,
      });
      return em.findOneOrFail(SubcontractOrder, { where: { id } });
    });
  }

  async returnMaterials(
    id: string,
    dtos: Array<{
      materialId: string;
      quantityReturned: number;
      quantityWasted?: number;
    }>,
  ): Promise<SubcontractOrder> {
    const order = await this.findOne(id);

    return this.dataSource.transaction(async (em) => {
      for (const dto of dtos) {
        const mat = order.materials.find((m) => m.id === dto.materialId);
        if (!mat)
          throw new NotFoundException(`Material ${dto.materialId} not found`);

        await em.update(SubcontractMaterial, dto.materialId, {
          quantityReturned: dto.quantityReturned,
          quantityWasted: dto.quantityWasted ?? 0,
        });
      }

      return em.findOneOrFail(SubcontractOrder, { where: { id } });
    });
  }

  async getByParty(partyId: string): Promise<SubcontractOrder[]> {
    return this.repository.find({
      where: { partyId },
      order: { createdAt: 'DESC' },
    });
  }
}
