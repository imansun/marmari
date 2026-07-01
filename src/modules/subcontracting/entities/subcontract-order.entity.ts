import { Entity, Column, Index, OneToMany, JoinColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { SubcontractOrderItem } from './subcontract-order-item.entity';
import { SubcontractMaterial } from './subcontract-material.entity';

export enum SubcontractOrderType {
  PRODUCTION = 'production',
  SERVICE = 'service',
  ASSEMBLY = 'assembly',
}

export enum SubcontractOrderStatus {
  DRAFT = 'draft',
  CONFIRMED = 'confirmed',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

@Entity('subcontract_orders', { schema: 'public' })
export class SubcontractOrder extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty()
  @Column()
  partyId: string;

  @ApiProperty({ enum: SubcontractOrderType })
  @Column({ type: 'enum', enum: SubcontractOrderType })
  orderType: SubcontractOrderType;

  @ApiProperty({
    enum: SubcontractOrderStatus,
    default: SubcontractOrderStatus.DRAFT,
  })
  @Column({
    type: 'enum',
    enum: SubcontractOrderStatus,
    default: SubcontractOrderStatus.DRAFT,
  })
  status: SubcontractOrderStatus;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  startDate: Date;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  endDate: Date;

  @ApiPropertyOptional()
  @Column({ type: 'timestamptz', nullable: true })
  completedDate?: Date;

  @ApiPropertyOptional()
  @Column({ length: 1000, nullable: true })
  description?: string;

  @ApiPropertyOptional()
  @Column({ length: 2000, nullable: true })
  termsConditions?: string;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  totalCost: number;

  @OneToMany(() => SubcontractOrderItem, (item) => item.order, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  items: SubcontractOrderItem[];

  @OneToMany(() => SubcontractMaterial, (mat) => mat.order, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  materials: SubcontractMaterial[];
}
