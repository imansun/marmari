import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { AssetCategory } from './asset-category.entity';

export enum AssetStatus {
  ACTIVE = 'active',
  DISPOSED = 'disposed',
  FULLY_DEPRECIATED = 'fully_depreciated',
}

export enum DepreciationMethod {
  STRAIGHT_LINE = 'straight_line',
  DECLINING_BALANCE = 'declining_balance',
}

@Entity('assets', { schema: 'public' })
export class Asset extends BaseEntity {
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

  @ManyToOne(() => AssetCategory, { eager: true })
  @JoinColumn({ name: 'categoryId' })
  category: AssetCategory;

  @ApiProperty()
  @Column()
  categoryId: string;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  purchaseDate: Date;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2 })
  purchasePrice: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  salvageValue: number;

  @ApiProperty({ type: 'number' })
  @Column({ default: 60 })
  usefulLife: number;

  @ApiProperty({
    enum: DepreciationMethod,
    default: DepreciationMethod.STRAIGHT_LINE,
  })
  @Column({
    type: 'enum',
    enum: DepreciationMethod,
    default: DepreciationMethod.STRAIGHT_LINE,
  })
  depreciationMethod: DepreciationMethod;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  accumulatedDepreciation: number;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  currentValue: number;

  @ApiProperty({ enum: AssetStatus, default: AssetStatus.ACTIVE })
  @Column({
    type: 'enum',
    enum: AssetStatus,
    default: AssetStatus.ACTIVE,
  })
  status: AssetStatus;

  @ApiPropertyOptional()
  @Column({ type: 'timestamptz', nullable: true })
  disposedAt?: Date;
}
