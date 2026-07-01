import { Entity, Column, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

export enum ProductType {
  GOOD = 'good',
  SERVICE = 'service',
}

export enum ProductState {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DISCONTINUED = 'discontinued',
}

@Entity('products', { schema: 'public' })
export class Product extends BaseEntity {
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

  @ApiProperty({ enum: ProductType })
  @Column({
    type: 'enum',
    enum: ProductType,
    default: ProductType.GOOD,
  })
  productType: ProductType;

  @ApiProperty({ enum: ProductState, default: ProductState.ACTIVE })
  @Column({
    type: 'enum',
    enum: ProductState,
    default: ProductState.ACTIVE,
  })
  state: ProductState;

  @ApiProperty()
  @Column({ length: 50, nullable: true })
  secondCode?: string;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  purchasePrice: number;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  salesPrice: number;

  @ApiProperty()
  @Column({ default: 0 })
  stockQuantity: number;

  @ApiProperty()
  @Column({ default: 0 })
  minStock: number;

  @ApiProperty()
  @Column({ default: 0 })
  maxStock: number;

  @ApiProperty()
  @Column({ length: 50, nullable: true })
  unit?: string;

  @ApiProperty()
  @Column({ default: false })
  isFreeProduct: boolean;
}
