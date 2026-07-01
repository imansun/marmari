import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { Treasury } from './treasury.entity';

export enum TransactionType {
  DEPOSIT = 'deposit',
  WITHDRAWAL = 'withdrawal',
  TRANSFER_IN = 'transfer_in',
  TRANSFER_OUT = 'transfer_out',
}

@Entity('treasury_transactions', { schema: 'public' })
export class TreasuryTransaction extends BaseEntity {
  @ManyToOne(() => Treasury, { eager: true })
  @JoinColumn({ name: 'treasuryId' })
  treasury: Treasury;

  @ApiProperty()
  @Column()
  treasuryId: string;

  @ApiProperty({ enum: TransactionType })
  @Column({ type: 'enum', enum: TransactionType })
  transactionType: TransactionType;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2 })
  amount: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2 })
  balanceBefore: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2 })
  balanceAfter: number;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  date: Date;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @ApiPropertyOptional()
  @Column({ length: 50, nullable: true })
  referenceNumber?: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  partyId?: string;

  @ApiPropertyOptional()
  @Column({ length: 100, nullable: true })
  relatedEntityType?: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  relatedEntityId?: string;
}
