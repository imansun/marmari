import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { AccountType } from './account-type.entity';

export enum AccountStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  CLOSED = 'closed',
}

export enum AccountEffectScope {
  BOTH = 'both',
  DEBIT = 'debit',
  CREDIT = 'credit',
}

@Entity('accounts', { schema: 'public' })
export class Account extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty()
  @Column({ length: 200 })
  name: string;

  @ApiPropertyOptional()
  @Column({ length: 200, nullable: true })
  secondTitle?: string;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  debitBalance: number;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  creditBalance: number;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  balance: number;

  @ApiProperty({ enum: AccountEffectScope, default: AccountEffectScope.BOTH })
  @Column({
    type: 'enum',
    enum: AccountEffectScope,
    default: AccountEffectScope.BOTH,
  })
  effectScope: AccountEffectScope;

  @ApiProperty({ enum: AccountStatus, default: AccountStatus.ACTIVE })
  @Column({
    type: 'enum',
    enum: AccountStatus,
    default: AccountStatus.ACTIVE,
  })
  status: AccountStatus;

  @ApiProperty()
  @Column({ default: false })
  isAutomatic: boolean;

  @ManyToOne(() => AccountType, { eager: true })
  @JoinColumn({ name: 'accountTypeId' })
  accountType: AccountType;

  @ApiProperty()
  @Column()
  accountTypeId: string;
}
