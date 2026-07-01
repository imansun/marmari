import { Entity, Column, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

@Entity('asset_categories', { schema: 'public' })
export class AssetCategory extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty()
  @Column({ length: 200 })
  name: string;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @ApiProperty({ default: 60 })
  @Column({ default: 60 })
  defaultUsefulLife: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  depreciationRate: number;

  @ApiProperty({ default: true })
  @Column({ default: true })
  isActive: boolean;
}
