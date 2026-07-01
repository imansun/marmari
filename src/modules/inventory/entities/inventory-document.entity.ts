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
import { Warehouse } from './warehouse.entity';
import { Product } from '../../products/entities/product.entity';

export enum DocumentType {
  RECEIPT = 'receipt',
  ISSUE = 'issue',
  TRANSFER = 'transfer',
  ADJUSTMENT = 'adjustment',
}

export enum DocumentStatus {
  DRAFT = 'draft',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
}

@Entity('inventory_documents', { schema: 'public' })
export class InventoryDocument extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  documentNumber: string;

  @ApiProperty({ enum: DocumentType })
  @Column({
    type: 'enum',
    enum: DocumentType,
  })
  documentType: DocumentType;

  @ManyToOne(() => Warehouse, { eager: true })
  @JoinColumn({ name: 'warehouseId' })
  warehouse: Warehouse;

  @ApiProperty()
  @Column()
  warehouseId: string;

  @ManyToOne(() => Warehouse, { eager: true, nullable: true })
  @JoinColumn({ name: 'targetWarehouseId' })
  targetWarehouse?: Warehouse;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  targetWarehouseId?: string;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  date: Date;

  @ApiProperty({ enum: DocumentStatus, default: DocumentStatus.DRAFT })
  @Column({
    type: 'enum',
    enum: DocumentStatus,
    default: DocumentStatus.DRAFT,
  })
  status: DocumentStatus;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @OneToMany(() => InventoryDocumentItem, (item) => item.document, {
    cascade: true,
  })
  items: InventoryDocumentItem[];
}

@Entity('inventory_document_items', { schema: 'public' })
export class InventoryDocumentItem extends BaseEntity {
  @ManyToOne(() => InventoryDocument, (doc) => doc.items)
  @JoinColumn({ name: 'documentId' })
  document: InventoryDocument;

  @ApiProperty()
  @Column()
  documentId: string;

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
}
