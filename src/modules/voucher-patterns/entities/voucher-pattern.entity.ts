import { Entity, Column, Index, OneToMany } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { VoucherPatternItem } from './voucher-pattern-item.entity';

@Entity('voucher_pattern', { schema: 'public' })
export class VoucherPattern extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty()
  @Column({ length: 200 })
  name: string;

  @ApiProperty()
  @Column()
  voucherTypeId: string;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @ApiProperty({ default: true })
  @Column({ default: true })
  isActive: boolean;

  @ApiPropertyOptional()
  @Column({ type: 'jsonb', nullable: true })
  items?: VoucherPatternItem[];

  @OneToMany(() => VoucherPatternItem, (item) => item.voucherPattern, { cascade: true })
  patternItems: VoucherPatternItem[];
}
