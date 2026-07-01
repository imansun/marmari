import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  Index,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { VoucherType } from './voucher-type.entity';
import { VoucherItem } from './voucher-item.entity';

export enum VoucherState {
  DRAFT = 'draft',
  CONFIRMED = 'confirmed',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  CLOSED = 'closed',
}

@Entity('vouchers', { schema: 'public' })
export class Voucher extends BaseEntity {
  @ApiProperty()
  @Column({ nullable: true })
  number?: number;

  @ApiProperty()
  @Column()
  @Index()
  dailyNumber: number;

  @ApiPropertyOptional()
  @Column({ length: 50, nullable: true })
  auxiliaryNumber?: string;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  @Index()
  date: Date;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  description?: string;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  descriptionEn?: string;

  @ApiProperty({ enum: VoucherState, default: VoucherState.DRAFT })
  @Column({
    type: 'enum',
    enum: VoucherState,
    default: VoucherState.DRAFT,
  })
  state: VoucherState;

  @ApiProperty()
  @Column({ default: false })
  isTemporary: boolean;

  @ApiProperty()
  @Column({ default: false })
  isReadonly: boolean;

  @ManyToOne(() => VoucherType, { eager: true })
  @JoinColumn({ name: 'voucherTypeId' })
  voucherType: VoucherType;

  @ApiProperty()
  @Column()
  voucherTypeId: string;

  @OneToMany(() => VoucherItem, (item) => item.voucher, {
    cascade: true,
    eager: true,
  })
  items: VoucherItem[];

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  totalDebit: number;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  totalCredit: number;
}
