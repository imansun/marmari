import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { Bank } from './bank.entity';

export enum BankAccountStatus {
  ACTIVE = 'active',
  BLOCKED = 'blocked',
  CLOSED = 'closed',
}

@Entity('bank_accounts', { schema: 'public' })
export class BankAccount extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  accountNumber: string;

  @ApiProperty()
  @Column({ length: 30, nullable: true })
  cardNumber?: string;

  @ApiProperty()
  @Column({ length: 30, nullable: true })
  shabaNumber?: string;

  @ApiProperty()
  @Column({ length: 200 })
  title: string;

  @ManyToOne(() => Bank, { eager: true })
  @JoinColumn({ name: 'bankId' })
  bank: Bank;

  @ApiProperty()
  @Column()
  bankId: string;

  @ApiProperty()
  @Column({ length: 50, nullable: true })
  branchName?: string;

  @ApiProperty()
  @Column({ length: 50, nullable: true })
  branchCode?: string;

  @ApiPropertyOptional()
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  balance: number;

  @ApiProperty({ enum: BankAccountStatus, default: BankAccountStatus.ACTIVE })
  @Column({
    type: 'enum',
    enum: BankAccountStatus,
    default: BankAccountStatus.ACTIVE,
  })
  status: BankAccountStatus;
}
