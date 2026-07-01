import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { MaintenanceSchedule } from './maintenance-schedule.entity';

export enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
}

@Entity('maintenance_tasks', { schema: 'public' })
export class MaintenanceTask extends BaseEntity {
  @ManyToOne(() => MaintenanceSchedule, (ms) => ms.tasks, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'scheduleId' })
  schedule: MaintenanceSchedule;

  @ApiProperty()
  @Column()
  scheduleId: string;

  @ApiProperty()
  @Column({ length: 500 })
  description: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  assignedToId?: string;

  @ApiProperty({ enum: TaskStatus, default: TaskStatus.PENDING })
  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.PENDING })
  status: TaskStatus;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  estimatedHours: number;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  actualHours: number;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  notes?: string;
}
