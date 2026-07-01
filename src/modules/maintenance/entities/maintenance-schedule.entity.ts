import { Entity, Column, Index, OneToMany, JoinColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { MaintenanceTask } from './maintenance-task.entity';

export enum MaintenanceType {
  PREVENTIVE = 'preventive',
  CORRECTIVE = 'corrective',
  EMERGENCY = 'emergency',
}

export enum MaintenancePriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export enum MaintenanceStatus {
  PLANNED = 'planned',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

@Entity('maintenance_schedules', { schema: 'public' })
export class MaintenanceSchedule extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty()
  @Column({ length: 200 })
  title: string;

  @ApiProperty({ enum: MaintenanceType })
  @Column({ type: 'enum', enum: MaintenanceType })
  maintenanceType: MaintenanceType;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  workCenterId?: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  productId?: string;

  @ApiProperty({
    enum: MaintenancePriority,
    default: MaintenancePriority.MEDIUM,
  })
  @Column({
    type: 'enum',
    enum: MaintenancePriority,
    default: MaintenancePriority.MEDIUM,
  })
  priority: MaintenancePriority;

  @ApiProperty({ enum: MaintenanceStatus, default: MaintenanceStatus.PLANNED })
  @Column({
    type: 'enum',
    enum: MaintenanceStatus,
    default: MaintenanceStatus.PLANNED,
  })
  status: MaintenanceStatus;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  scheduledDate: Date;

  @ApiPropertyOptional()
  @Column({ type: 'timestamptz', nullable: true })
  completedDate?: Date;

  @ApiPropertyOptional()
  @Column({ length: 1000, nullable: true })
  description?: string;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  cost: number;

  @OneToMany(() => MaintenanceTask, (task) => task.schedule, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  tasks: MaintenanceTask[];
}
