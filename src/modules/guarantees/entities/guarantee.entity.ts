import { Entity, Column, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

export enum GuaranteeType {
  BANK_GUARANTEE = 'bank_guarantee',
  COLLATERAL = 'collateral',
  DEPOSIT = 'deposit',
}

export enum GuaranteeStatus {
  ACTIVE = 'active',
  EXPIRED = 'expired',
  CANCELLED = 'cancelled',
  SETTLED = 'settled',
}

@Entity('guarantee', { schema: 'public' })
export class Guarantee extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty({ enum: GuaranteeType })
  @Column({
    type: 'enum',
    enum: GuaranteeType,
  })
  type: GuaranteeType;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2 })
  amount: number;

  @ApiProperty()
  @Column({ type: 'date' })
  issueDate: Date;

  @ApiProperty()
  @Column({ type: 'date' })
  expiryDate: Date;

  @ApiProperty()
  @Column({ length: 200 })
  beneficiary: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  bankId?: string;

  @ApiProperty({ enum: GuaranteeStatus, default: GuaranteeStatus.ACTIVE })
  @Column({
    type: 'enum',
    enum: GuaranteeStatus,
    default: GuaranteeStatus.ACTIVE,
  })
  status: GuaranteeStatus;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @ApiProperty({ default: true })
  @Column({ default: true })
  isActive: boolean;
}
