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
import { Party } from '../../parties/entities/party.entity';
import { Warehouse } from '../../inventory/entities/warehouse.entity';
import { Product } from '../../products/entities/product.entity';

export enum PurchaseOrderStatus {
  DRAFT = 'draft',
  APPROVED = 'approved',
  PARTIALLY_RECEIVED = 'partially_received',
  FULLY_RECEIVED = 'fully_received',
  CANCELLED = 'cancelled',
}

@Entity('purchase_orders', { schema: 'public' })
export class PurchaseOrder extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  orderNumber: string;

  @ManyToOne(() => Party, { eager: true })
  @JoinColumn({ name: 'supplierId' })
  supplier: Party;

  @ApiProperty()
  @Column()
  supplierId: string;

  @ManyToOne(() => Warehouse, { eager: true })
  @JoinColumn({ name: 'warehouseId' })
  warehouse: Warehouse;

  @ApiProperty()
  @Column()
  warehouseId: string;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  orderDate: Date;

  @ApiPropertyOptional()
  @Column({ type: 'timestamptz', nullable: true })
  expectedDate?: Date;

  @ApiProperty({
    enum: PurchaseOrderStatus,
    default: PurchaseOrderStatus.DRAFT,
  })
  @Column({
    type: 'enum',
    enum: PurchaseOrderStatus,
    default: PurchaseOrderStatus.DRAFT,
  })
  status: PurchaseOrderStatus;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  totalAmount: number;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @OneToMany(() => PurchaseOrderItem, (item) => item.purchaseOrder, {
    cascade: true,
  })
  items: PurchaseOrderItem[];
}

@Entity('purchase_order_items', { schema: 'public' })
export class PurchaseOrderItem extends BaseEntity {
  @ManyToOne(() => PurchaseOrder, (po) => po.items)
  @JoinColumn({ name: 'purchaseOrderId' })
  purchaseOrder: PurchaseOrder;

  @ApiProperty()
  @Column()
  purchaseOrderId: string;

  @ManyToOne(() => Product, { eager: true })
  @JoinColumn({ name: 'productId' })
  product: Product;

  @ApiProperty()
  @Column()
  productId: string;

  @ApiProperty()
  @Column({ default: 0 })
  quantity: number;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  unitPrice: number;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  totalPrice: number;

  @ApiProperty()
  @Column({ default: 0 })
  receivedQuantity: number;
}
