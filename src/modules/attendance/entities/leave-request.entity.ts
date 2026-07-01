import { Entity, Column, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

export enum LeaveType {
  ANNUAL = 'annual',
  SICK = 'sick',
  PERSONAL = 'personal',
  MATERNITY = 'maternity',
  PATERNITY = 'paternity',
  UNPAID = 'unpaid',
  OTHER = 'other',
}

export enum LeaveStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  CANCELLED = 'cancelled',
}

@Entity('leave_requests', { schema: 'public' })
export class LeaveRequest extends BaseEntity {
  @ApiProperty()
  @Column()
  @Index()
  employeeId: string;

  @ApiProperty({ enum: LeaveType })
  @Column({ type: 'enum', enum: LeaveType })
  leaveType: LeaveType;

  @ApiProperty({ enum: LeaveStatus, default: LeaveStatus.PENDING })
  @Column({ type: 'enum', enum: LeaveStatus, default: LeaveStatus.PENDING })
  status: LeaveStatus;

  @ApiProperty()
  @Column({ type: 'date' })
  startDate: string;

  @ApiProperty()
  @Column({ type: 'date' })
  endDate: string;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  reason?: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  approvedById?: string;

  @ApiPropertyOptional()
  @Column({ type: 'timestamptz', nullable: true })
  approvedAt?: Date;
}
