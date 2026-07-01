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
import { Product } from '../../products/entities/product.entity';

export enum InvoiceType {
  SALES = 'sales',
  PURCHASE = 'purchase',
  RETURN_SALES = 'return_sales',
  RETURN_PURCHASE = 'return_purchase',
}

export enum InvoiceStatus {
  DRAFT = 'draft',
  ISSUED = 'issued',
  PAID = 'paid',
  CANCELLED = 'cancelled',
}

@Entity('invoices', { schema: 'public' })
export class Invoice extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  invoiceNumber: string;

  @ApiProperty({ enum: InvoiceType })
  @Column({ type: 'enum', enum: InvoiceType })
  invoiceType: InvoiceType;

  @ManyToOne(() => Party, { eager: true })
  @JoinColumn({ name: 'partyId' })
  party: Party;

  @ApiProperty()
  @Column()
  partyId: string;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  date: Date;

  @ApiPropertyOptional()
  @Column({ type: 'timestamptz', nullable: true })
  dueDate?: Date;

  @ApiProperty({ enum: InvoiceStatus, default: InvoiceStatus.DRAFT })
  @Column({ type: 'enum', enum: InvoiceStatus, default: InvoiceStatus.DRAFT })
  status: InvoiceStatus;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  totalAmount: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  discountAmount: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  taxAmount: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  finalAmount: number;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @OneToMany(() => InvoiceItem, (item) => item.invoice, { cascade: true })
  items: InvoiceItem[];
}

@Entity('invoice_items', { schema: 'public' })
export class InvoiceItem extends BaseEntity {
  @ManyToOne(() => Invoice, (inv) => inv.items)
  @JoinColumn({ name: 'invoiceId' })
  invoice: Invoice;

  @ApiProperty()
  @Column()
  invoiceId: string;

  @ManyToOne(() => Product, { eager: true })
  @JoinColumn({ name: 'productId' })
  product: Product;

  @ApiProperty()
  @Column()
  productId: string;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @ApiProperty()
  @Column({ default: 0 })
  quantity: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  unitPrice: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  discountPercent: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  taxRate: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  totalPrice: number;
}
