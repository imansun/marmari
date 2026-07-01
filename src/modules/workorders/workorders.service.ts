import {
  Injectable,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import {
  WorkOrder,
  WorkOrderStatus,
  WorkOrderPriority,
} from './entities/work-order.entity';
import {
  WorkOrderOperation,
  OperationStatus,
} from './entities/work-order-operation.entity';

@Injectable()
export class WorkordersService extends CrudService<WorkOrder> {
  constructor(
    @InjectRepository(WorkOrder)
    repository: Repository<WorkOrder>,
    @InjectRepository(WorkOrderOperation)
    private readonly operationRepository: Repository<WorkOrderOperation>,
  ) {
    super(repository);
  }

  async createWorkOrder(dto: {
    code: string;
    description?: string;
    workCenterId: string;
    productId: string;
    bomId?: string;
    quantity: number;
    priority?: string;
    startDate: string;
    endDate: string;
    notes?: string;
    operations: Array<{
      name: string;
      workCenterId: string;
      sequence: number;
      setupTime?: number;
      runTime?: number;
      notes?: string;
    }>;
  }): Promise<WorkOrder> {
    const existing = await this.repository.findOne({
      where: { code: dto.code },
    });
    if (existing) throw new ConflictException('Work order code already exists');

    const operations = dto.operations.map((op) =>
      this.operationRepository.create({
        name: op.name,
        workCenterId: op.workCenterId,
        sequence: op.sequence,
        setupTime: op.setupTime ?? 0,
        runTime: op.runTime ?? 0,
        notes: op.notes,
      }),
    );

    const order = this.repository.create({
      code: dto.code,
      description: dto.description,
      workCenterId: dto.workCenterId,
      productId: dto.productId,
      bomId: dto.bomId,
      quantity: dto.quantity,
      priority: (dto.priority as WorkOrderPriority) ?? WorkOrderPriority.MEDIUM,
      status: WorkOrderStatus.DRAFT,
      startDate: new Date(dto.startDate),
      endDate: new Date(dto.endDate),
      notes: dto.notes,
      operations,
    });

    return this.repository.save(order);
  }

  async updateWorkOrder(
    id: string,
    dto: Record<string, unknown>,
  ): Promise<WorkOrder> {
    const order = await this.findOne(id);
    if (order.status === WorkOrderStatus.CANCELLED) {
      throw new BadRequestException('Cannot update a cancelled work order');
    }
    if (dto.startDate) dto.startDate = new Date(dto.startDate as string);
    if (dto.endDate) dto.endDate = new Date(dto.endDate as string);
    if (dto.completedDate)
      dto.completedDate = new Date(dto.completedDate as string);
    await this.repository.update(id, dto);
    return this.findOne(id);
  }

  async plan(id: string): Promise<WorkOrder> {
    const order = await this.findOne(id);
    if (order.status !== WorkOrderStatus.DRAFT) {
      throw new BadRequestException('Only draft orders can be planned');
    }
    order.status = WorkOrderStatus.PLANNED;
    return this.repository.save(order);
  }

  async start(id: string): Promise<WorkOrder> {
    const order = await this.findOne(id);
    if (order.status !== WorkOrderStatus.PLANNED) {
      throw new BadRequestException('Only planned orders can be started');
    }
    order.status = WorkOrderStatus.IN_PROGRESS;
    return this.repository.save(order);
  }

  async complete(
    id: string,
    dto?: { producedQuantity?: number; defectiveQuantity?: number },
  ): Promise<WorkOrder> {
    const order = await this.findOne(id);
    if (order.status !== WorkOrderStatus.IN_PROGRESS) {
      throw new BadRequestException('Only in-progress orders can be completed');
    }
    order.status = WorkOrderStatus.COMPLETED;
    order.completedDate = new Date();
    if (dto?.producedQuantity !== undefined)
      order.producedQuantity = dto.producedQuantity;
    if (dto?.defectiveQuantity !== undefined)
      order.defectiveQuantity = dto.defectiveQuantity;
    return this.repository.save(order);
  }

  async hold(id: string): Promise<WorkOrder> {
    const order = await this.findOne(id);
    if (
      order.status !== WorkOrderStatus.IN_PROGRESS &&
      order.status !== WorkOrderStatus.PLANNED
    ) {
      throw new BadRequestException(
        'Only planned or in-progress orders can be put on hold',
      );
    }
    order.status = WorkOrderStatus.ON_HOLD;
    return this.repository.save(order);
  }

  async resume(id: string): Promise<WorkOrder> {
    const order = await this.findOne(id);
    if (order.status !== WorkOrderStatus.ON_HOLD) {
      throw new BadRequestException('Only held orders can be resumed');
    }
    order.status = WorkOrderStatus.IN_PROGRESS;
    return this.repository.save(order);
  }

  async cancel(id: string): Promise<WorkOrder> {
    const order = await this.findOne(id);
    if (
      order.status === WorkOrderStatus.COMPLETED ||
      order.status === WorkOrderStatus.CANCELLED
    ) {
      throw new BadRequestException(
        'Cannot cancel a completed or already cancelled order',
      );
    }
    order.status = WorkOrderStatus.CANCELLED;
    return this.repository.save(order);
  }

  async updateOperationStatus(
    id: string,
    status: string,
  ): Promise<WorkOrderOperation> {
    const op = await this.operationRepository.findOneOrFail({ where: { id } });
    op.status = status as OperationStatus;
    return this.operationRepository.save(op);
  }

  async getByWorkCenter(workCenterId: string): Promise<WorkOrder[]> {
    return this.repository.find({
      where: { workCenterId },
      order: { startDate: 'DESC' },
    });
  }

  async getByProduct(productId: string): Promise<WorkOrder[]> {
    return this.repository.find({
      where: { productId },
      order: { createdAt: 'DESC' },
    });
  }
}
