import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { BankAccount } from '../../banking/entities/bank-account.entity';

export enum ChequeStatus {
  ISSUED = 'issued',
  RECEIVED = 'received',
  DEPOSITED = 'deposited',
  CASHED = 'cashed',
  BOUNCED = 'bounced',
  CANCELLED = 'cancelled',
}

export enum ChequeDirection {
  ISSUED_TO = 'issued_to',
  RECEIVED_FROM = 'received_from',
}

@Entity('cheques', { schema: 'public' })
export class Cheque extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  chequeNumber: string;

  @ApiProperty({ enum: ChequeDirection })
  @Column({
    type: 'enum',
    enum: ChequeDirection,
  })
  direction: ChequeDirection;

  @ManyToOne(() => BankAccount, { eager: true })
  @JoinColumn({ name: 'bankAccountId' })
  bankAccount: BankAccount;

  @ApiProperty()
  @Column()
  bankAccountId: string;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2 })
  amount: number;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  issueDate: Date;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  dueDate: Date;

  @ApiProperty()
  @Column({ length: 200 })
  payerName: string;

  @ApiProperty()
  @Column({ length: 200 })
  payeeName: string;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @ApiProperty({ enum: ChequeStatus, default: ChequeStatus.ISSUED })
  @Column({
    type: 'enum',
    enum: ChequeStatus,
    default: ChequeStatus.ISSUED,
  })
  status: ChequeStatus;

  @ApiPropertyOptional()
  @Column({ type: 'timestamptz', nullable: true })
  depositedAt?: Date;

  @ApiPropertyOptional()
  @Column({ type: 'timestamptz', nullable: true })
  cashedAt?: Date;
}
