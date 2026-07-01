import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  Index,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

@Entity('price_lists', { schema: 'public' })
export class PriceList extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty()
  @Column({ length: 200 })
  name: string;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @ApiProperty({ default: 'IRR' })
  @Column({ length: 10, default: 'IRR' })
  currency: string;

  @ApiProperty({ default: true })
  @Column({ default: true })
  isActive: boolean;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  effectiveFrom: Date;

  @ApiPropertyOptional()
  @Column({ type: 'timestamptz', nullable: true })
  effectiveTo?: Date;

  @OneToMany(() => PriceListItem, (item) => item.priceList, { cascade: true })
  items: PriceListItem[];
}

@Entity('price_list_items', { schema: 'public' })
export class PriceListItem extends BaseEntity {
  @ManyToOne(() => PriceList, (pl) => pl.items)
  @JoinColumn({ name: 'priceListId' })
  priceList: PriceList;

  @ApiProperty()
  @Column()
  priceListId: string;

  @ApiProperty()
  @Column()
  productId: string;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2 })
  unitPrice: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  discountPercent: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  discountAmount: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2 })
  finalPrice: number;
}
