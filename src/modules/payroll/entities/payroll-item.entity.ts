import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { PayrollPeriod } from './payroll-period.entity';

@Entity('payroll_items', { schema: 'public' })
export class PayrollItem extends BaseEntity {
  @ManyToOne(() => PayrollPeriod, (pp) => pp.items, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'payrollPeriodId' })
  period: PayrollPeriod;

  @ApiProperty()
  @Column()
  payrollPeriodId: string;

  @ApiProperty()
  @Column()
  employeeId: string;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  baseSalary: number;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  allowances: number;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  overtimePay: number;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  bonus: number;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  deductions: number;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  tax: number;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  insurance: number;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  loanDeduction: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  netPay: number;

  @ApiPropertyOptional()
  @Column({ length: 100, nullable: true })
  bankTransferRef?: string;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  notes?: string;
}
