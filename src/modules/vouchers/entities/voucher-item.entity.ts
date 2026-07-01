import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { Voucher } from './voucher.entity';

@Entity('voucher_items', { schema: 'public' })
export class VoucherItem extends BaseEntity {
  @ApiProperty()
  @Column()
  rowNumber: number;

  @ManyToOne(() => Voucher, (voucher) => voucher.items, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'voucherId' })
  voucher: Voucher;

  @ApiProperty()
  @Column()
  voucherId: string;

  @ApiProperty()
  @Column()
  accountId: string;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  debit: number;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  credit: number;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  description?: string;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  descriptionEn?: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  followUpNumber?: string;

  @ApiPropertyOptional()
  @Column({ type: 'timestamptz', nullable: true })
  followUpDate?: Date;

  @ApiPropertyOptional()
  @Column({ type: 'decimal', precision: 20, scale: 2, nullable: true })
  quantity?: number;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  partyId?: string;
}
