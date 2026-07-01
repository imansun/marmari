import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { SubcontractOrder } from './subcontract-order.entity';

export enum SubcontractItemStatus {
  PENDING = 'pending',
  PARTIAL = 'partial',
  COMPLETE = 'complete',
}

@Entity('subcontract_order_items', { schema: 'public' })
export class SubcontractOrderItem extends BaseEntity {
  @ManyToOne(() => SubcontractOrder, (order) => order.items, {
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
  quantity: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2 })
  unitPrice: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2 })
  totalPrice: number;

  @ApiProperty({ type: 'number', default: 0 })
  @Column({ type: 'decimal', precision: 20, scale: 4, default: 0 })
  receivedQuantity: number;

  @ApiProperty({
    enum: SubcontractItemStatus,
    default: SubcontractItemStatus.PENDING,
  })
  @Column({
    type: 'enum',
    enum: SubcontractItemStatus,
    default: SubcontractItemStatus.PENDING,
  })
  itemStatus: SubcontractItemStatus;
}
