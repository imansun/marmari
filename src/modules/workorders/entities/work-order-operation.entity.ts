import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { WorkOrder } from './work-order.entity';

export enum OperationStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
}

@Entity('work_order_operations', { schema: 'public' })
export class WorkOrderOperation extends BaseEntity {
  @ManyToOne(() => WorkOrder, (wo) => wo.operations, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'workOrderId' })
  workOrder: WorkOrder;

  @ApiProperty()
  @Column()
  workOrderId: string;

  @ApiProperty()
  @Column({ length: 200 })
  name: string;

  @ApiProperty()
  @Column()
  workCenterId: string;

  @ApiProperty()
  @Column()
  sequence: number;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  setupTime: number;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  runTime: number;

  @ApiProperty({ enum: OperationStatus, default: OperationStatus.PENDING })
  @Column({
    type: 'enum',
    enum: OperationStatus,
    default: OperationStatus.PENDING,
  })
  status: OperationStatus;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  notes?: string;
}
