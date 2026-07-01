import { Entity, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { Voucher } from './voucher.entity';

@Entity('voucher_types', { schema: 'public' })
export class VoucherType extends BaseEntity {
  @ApiProperty()
  @Column({ unique: true })
  code: number;

  @ApiProperty()
  @Column({ length: 200 })
  title: string;

  @ApiProperty()
  @Column({ length: 200, nullable: true })
  titleEn?: string;

  @ApiProperty()
  @Column({ nullable: true })
  description?: string;

  @OneToMany(() => Voucher, (voucher) => voucher.voucherType)
  vouchers: Voucher[];
}
