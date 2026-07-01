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

export enum ContractType {
  PURCHASE = 'purchase',
  SALES = 'sales',
  SERVICE = 'service',
  LEASE = 'lease',
  OTHER = 'other',
}

export enum ContractStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  COMPLETED = 'completed',
  TERMINATED = 'terminated',
  CANCELLED = 'cancelled',
}

@Entity('contracts', { schema: 'public' })
export class Contract extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  contractNumber: string;

  @ApiProperty()
  @Column({ length: 200 })
  title: string;

  @ApiProperty({ enum: ContractType })
  @Column({
    type: 'enum',
    enum: ContractType,
    default: ContractType.OTHER,
  })
  contractType: ContractType;

  @ManyToOne(() => Party, { eager: true })
  @JoinColumn({ name: 'partyId' })
  party: Party;

  @ApiProperty()
  @Column()
  partyId: string;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  startDate: Date;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  endDate: Date;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  amount: number;

  @ApiProperty({ enum: ContractStatus, default: ContractStatus.DRAFT })
  @Column({
    type: 'enum',
    enum: ContractStatus,
    default: ContractStatus.DRAFT,
  })
  status: ContractStatus;

  @ApiPropertyOptional()
  @Column({ type: 'text', nullable: true })
  terms?: string;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @OneToMany(() => ContractItem, (item) => item.contract, { cascade: true })
  items: ContractItem[];
}

@Entity('contract_items', { schema: 'public' })
export class ContractItem extends BaseEntity {
  @ManyToOne(() => Contract, (c) => c.items)
  @JoinColumn({ name: 'contractId' })
  contract: Contract;

  @ApiProperty()
  @Column()
  contractId: string;

  @ManyToOne(() => Product, { eager: true, nullable: true })
  @JoinColumn({ name: 'productId' })
  product?: Product;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  productId?: string;

  @ApiProperty()
  @Column({ length: 500 })
  description: string;

  @ApiProperty()
  @Column({ default: 0 })
  quantity: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  unitPrice: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  totalPrice: number;
}
