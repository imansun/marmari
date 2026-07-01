import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { Account } from '../../accounts/entities/account.entity';

export enum TransferStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  FAILED = 'failed',
}

@Entity('transfers', { schema: 'public' })
export class Transfer extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  referenceNumber: string;

  @ManyToOne(() => Account, { eager: true })
  @JoinColumn({ name: 'fromAccountId' })
  fromAccount: Account;

  @ApiProperty()
  @Column()
  fromAccountId: string;

  @ManyToOne(() => Account, { eager: true })
  @JoinColumn({ name: 'toAccountId' })
  toAccount: Account;

  @ApiProperty()
  @Column()
  toAccountId: string;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2 })
  amount: number;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  transferDate: Date;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @ApiProperty({ enum: TransferStatus, default: TransferStatus.PENDING })
  @Column({
    type: 'enum',
    enum: TransferStatus,
    default: TransferStatus.PENDING,
  })
  status: TransferStatus;

  @ApiPropertyOptional()
  @Column({ type: 'timestamptz', nullable: true })
  completedAt?: Date;
}
