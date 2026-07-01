import { Entity, Column, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

export enum TreasuryType {
  CASH = 'cash',
  BANK = 'bank',
  CREDIT = 'credit',
}

@Entity('treasuries', { schema: 'public' })
export class Treasury extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty()
  @Column({ length: 200 })
  name: string;

  @ApiProperty({ enum: TreasuryType })
  @Column({ type: 'enum', enum: TreasuryType })
  treasuryType: TreasuryType;

  @ApiProperty({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  balance: number;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @ApiProperty({ default: true })
  @Column({ default: true })
  isActive: boolean;
}
