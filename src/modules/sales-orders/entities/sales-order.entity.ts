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

export enum SalesOrderStatus {
  DRAFT = 'draft',
  CONFIRMED = 'confirmed',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
}

@Entity('sales_orders', { schema: 'public' })
export class SalesOrder extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  orderNumber: string;

  @ManyToOne(() => Party, { eager: true })
  @JoinColumn({ name: 'customerId' })
  customer: Party;

  @ApiProperty()
  @Column()
  customerId: string;

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
  deliveryDate?: Date;

  @ApiProperty({ enum: SalesOrderStatus, default: SalesOrderStatus.DRAFT })
  @Column({
    type: 'enum',
    enum: SalesOrderStatus,
    default: SalesOrderStatus.DRAFT,
  })
  status: SalesOrderStatus;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  totalAmount: number;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @OneToMany(() => SalesOrderItem, (item) => item.salesOrder, { cascade: true })
  items: SalesOrderItem[];
}

@Entity('sales_order_items', { schema: 'public' })
export class SalesOrderItem extends BaseEntity {
  @ManyToOne(() => SalesOrder, (so) => so.items)
  @JoinColumn({ name: 'salesOrderId' })
  salesOrder: SalesOrder;

  @ApiProperty()
  @Column()
  salesOrderId: string;

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
  shippedQuantity: number;
}
