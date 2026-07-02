import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { VoucherPattern } from './voucher-pattern.entity';

@Entity('voucher_pattern_item', { schema: 'public' })
export class VoucherPatternItem extends BaseEntity {
  @ManyToOne(() => VoucherPattern, (pattern) => pattern.patternItems)
  @JoinColumn({ name: 'voucherPatternId' })
  voucherPattern: VoucherPattern;

  @ApiProperty()
  @Column()
  voucherPatternId: string;

  @ApiProperty()
  @Column()
  accountId: string;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  debitFormula?: string;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  creditFormula?: string;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @ApiProperty({ default: 0 })
  @Column({ default: 0 })
  sortOrder: number;
}
