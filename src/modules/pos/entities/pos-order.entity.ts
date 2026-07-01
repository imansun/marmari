import { Entity, Column, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

export enum PosOrderStatus {
  DRAFT = 'draft',
  PAID = 'paid',
  VOID = 'void',
  REFUNDED = 'refunded',
}

@Entity('pos_orders', { schema: 'public' })
export class PosOrder extends BaseEntity {
  @ApiProperty()
  @Column()
  sessionId: string;

  @ApiProperty()
  @Column()
  @Index()
  orderNumber: number;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  partyId?: string;

  @ApiProperty({ example: [] })
  @Column({ type: 'jsonb', default: [] })
  items: Array<{
    productId: string;
    productName: string;
    quantity: number;
    unitPrice: number;
    discount: number;
    total: number;
  }>;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  subtotal: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  discountTotal: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  taxTotal: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  grandTotal: number;

  @ApiProperty({ enum: PosOrderStatus, default: PosOrderStatus.DRAFT })
  @Column({ type: 'enum', enum: PosOrderStatus, default: PosOrderStatus.DRAFT })
  status: PosOrderStatus;

  @ApiPropertyOptional()
  @Column({ type: 'timestamptz', nullable: true })
  paidAt?: Date;
}
