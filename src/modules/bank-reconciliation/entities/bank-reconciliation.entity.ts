import { Entity, Column, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

export enum ReconciliationStatus {
  DRAFT = 'draft',
  COMPLETED = 'completed',
  CONFIRMED = 'confirmed',
}

@Entity('bank_reconciliation', { schema: 'public' })
export class BankReconciliation extends BaseEntity {
  @ApiProperty()
  @Column()
  bankAccountId: string;

  @ApiProperty()
  @Column({ type: 'date' })
  reconciliationDate: Date;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2 })
  statementBalance: number;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2 })
  bookBalance: number;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2 })
  difference: number;

  @ApiProperty({ enum: ReconciliationStatus, default: ReconciliationStatus.DRAFT })
  @Column({
    type: 'enum',
    enum: ReconciliationStatus,
    default: ReconciliationStatus.DRAFT,
  })
  status: ReconciliationStatus;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  notes?: string;

  @ApiPropertyOptional()
  @Column({ type: 'date', nullable: true })
  reconciledAt?: Date;
}
