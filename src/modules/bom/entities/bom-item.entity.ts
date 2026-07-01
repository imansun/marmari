import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { BOM } from './bom.entity';

@Entity('bom_items', { schema: 'public' })
export class BOMItem extends BaseEntity {
  @ManyToOne(() => BOM, (bom) => bom.items, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'bomId' })
  bom: BOM;

  @ApiProperty()
  @Column()
  bomId: string;

  @ApiProperty()
  @Column()
  productId: string;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 4 })
  quantity: number;

  @ApiProperty()
  @Column({ length: 50 })
  unit: string;

  @ApiPropertyOptional({ default: 0 })
  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  wastePercent: number;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  costShare: number;

  @ApiPropertyOptional({ default: 0 })
  @Column({ default: 0 })
  sortOrder: number;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;
}
