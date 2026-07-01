import { Entity, Column, Index, OneToMany, JoinColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { PayrollItem } from './payroll-item.entity';

export enum PayrollPeriodStatus {
  DRAFT = 'draft',
  PROCESSED = 'processed',
  PAID = 'paid',
  CANCELLED = 'cancelled',
}

@Entity('payroll_periods', { schema: 'public' })
export class PayrollPeriod extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty({ example: 'فروردین 1405' })
  @Column({ length: 200 })
  name: string;

  @ApiProperty()
  @Column({ type: 'date' })
  startDate: string;

  @ApiProperty()
  @Column({ type: 'date' })
  endDate: string;

  @ApiProperty({
    enum: PayrollPeriodStatus,
    default: PayrollPeriodStatus.DRAFT,
  })
  @Column({
    type: 'enum',
    enum: PayrollPeriodStatus,
    default: PayrollPeriodStatus.DRAFT,
  })
  status: PayrollPeriodStatus;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  totalPayroll: number;

  @ApiPropertyOptional()
  @Column({ type: 'timestamptz', nullable: true })
  processedAt?: Date;

  @ApiPropertyOptional()
  @Column({ type: 'timestamptz', nullable: true })
  paidAt?: Date;

  @OneToMany(() => PayrollItem, (item) => item.period, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  items: PayrollItem[];
}
