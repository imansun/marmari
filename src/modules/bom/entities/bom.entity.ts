import { Entity, Column, Index, OneToMany, JoinColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { BOMItem } from './bom-item.entity';

export enum BOMStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  ARCHIVED = 'archived',
}

@Entity('boms', { schema: 'public' })
export class BOM extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty()
  @Column({ length: 200 })
  name: string;

  @ApiProperty()
  @Column()
  productId: string;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 4, default: 1 })
  quantity: number;

  @ApiProperty()
  @Column({ length: 50 })
  unit: string;

  @ApiProperty({ enum: BOMStatus, default: BOMStatus.DRAFT })
  @Column({ type: 'enum', enum: BOMStatus, default: BOMStatus.DRAFT })
  status: BOMStatus;

  @ApiProperty({ default: 1 })
  @Column({ default: 1 })
  revision: number;

  @ApiPropertyOptional()
  @Column({ type: 'decimal', precision: 20, scale: 2, nullable: true })
  totalCost?: number;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @ApiProperty({ default: true })
  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => BOMItem, (item) => item.bom, { cascade: true, eager: true })
  @JoinColumn()
  items: BOMItem[];
}
