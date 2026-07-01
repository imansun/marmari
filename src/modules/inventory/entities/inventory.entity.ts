import { Entity, Column, ManyToOne, JoinColumn, Unique, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { Product } from '../../products/entities/product.entity';
import { Warehouse } from './warehouse.entity';

@Unique(['productId', 'warehouseId'])
@Entity('inventories', { schema: 'public' })
export class Inventory extends BaseEntity {
  @ManyToOne(() => Product, { eager: true })
  @JoinColumn({ name: 'productId' })
  product: Product;

  @ApiProperty()
  @Column()
  @Index()
  productId: string;

  @ManyToOne(() => Warehouse, { eager: true })
  @JoinColumn({ name: 'warehouseId' })
  warehouse: Warehouse;

  @ApiProperty()
  @Column()
  warehouseId: string;

  @ApiProperty()
  @Column({ default: 0 })
  quantity: number;

  @ApiPropertyOptional()
  @Column({ default: 0 })
  minQuantity: number;

  @ApiPropertyOptional()
  @Column({ default: 0 })
  maxQuantity: number;
}
