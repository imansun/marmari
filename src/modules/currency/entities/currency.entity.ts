import { Entity, Column, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

@Entity('currencies', { schema: 'public' })
export class Currency extends BaseEntity {
  @ApiProperty({ example: 'USD' })
  @Column({ length: 3, unique: true })
  @Index()
  code: string;

  @ApiProperty({ example: 'دلار آمریکا' })
  @Column({ length: 200 })
  name: string;

  @ApiProperty({ example: '$' })
  @Column({ length: 10 })
  symbol: string;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 4, default: 1 })
  exchangeRate: number;

  @ApiProperty({ default: false })
  @Column({ default: false })
  isBase: boolean;

  @ApiProperty({ default: true })
  @Column({ default: true })
  isActive: boolean;
}

@Entity('currency_rates', { schema: 'public' })
export class CurrencyRate extends BaseEntity {
  @ApiProperty()
  @Column()
  currencyId: string;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 4 })
  rate: number;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  date: Date;

  @ApiPropertyOptional()
  @Column({ length: 100, nullable: true })
  source?: string;
}
