import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { SubcontractOrder } from './subcontract-order.entity';

@Entity('subcontract_materials', { schema: 'public' })
export class SubcontractMaterial extends BaseEntity {
  @ManyToOne(() => SubcontractOrder, (order) => order.materials, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'orderId' })
  order: SubcontractOrder;

  @ApiProperty()
  @Column()
  orderId: string;

  @ApiProperty()
  @Column()
  productId: string;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 4 })
  quantitySent: number;

  @ApiProperty({ type: 'number', default: 0 })
  @Column({ type: 'decimal', precision: 20, scale: 4, default: 0 })
  quantityUsed: number;

  @ApiProperty({ type: 'number', default: 0 })
  @Column({ type: 'decimal', precision: 20, scale: 4, default: 0 })
  quantityReturned: number;

  @ApiPropertyOptional({ type: 'number', default: 0 })
  @Column({ type: 'decimal', precision: 20, scale: 4, default: 0 })
  quantityWasted: number;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  unitPrice: number;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  totalCost: number;
}
