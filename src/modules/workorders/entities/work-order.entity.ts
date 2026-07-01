import { Entity, Column, Index, OneToMany, JoinColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { WorkOrderOperation } from './work-order-operation.entity';

export enum WorkOrderPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export enum WorkOrderStatus {
  DRAFT = 'draft',
  PLANNED = 'planned',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  ON_HOLD = 'on_hold',
}

@Entity('work_orders', { schema: 'public' })
export class WorkOrder extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @ApiProperty()
  @Column()
  workCenterId: string;

  @ApiProperty()
  @Column()
  productId: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  bomId?: string;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 4 })
  quantity: number;

  @ApiProperty({ type: 'number', default: 0 })
  @Column({ type: 'decimal', precision: 20, scale: 4, default: 0 })
  producedQuantity: number;

  @ApiProperty({ type: 'number', default: 0 })
  @Column({ type: 'decimal', precision: 20, scale: 4, default: 0 })
  defectiveQuantity: number;

  @ApiProperty({ enum: WorkOrderPriority, default: WorkOrderPriority.MEDIUM })
  @Column({
    type: 'enum',
    enum: WorkOrderPriority,
    default: WorkOrderPriority.MEDIUM,
  })
  priority: WorkOrderPriority;

  @ApiProperty({ enum: WorkOrderStatus, default: WorkOrderStatus.DRAFT })
  @Column({
    type: 'enum',
    enum: WorkOrderStatus,
    default: WorkOrderStatus.DRAFT,
  })
  status: WorkOrderStatus;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  startDate: Date;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  endDate: Date;

  @ApiPropertyOptional()
  @Column({ type: 'timestamptz', nullable: true })
  completedDate?: Date;

  @ApiPropertyOptional()
  @Column({ length: 1000, nullable: true })
  notes?: string;

  @OneToMany(() => WorkOrderOperation, (op) => op.workOrder, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  operations: WorkOrderOperation[];
}
