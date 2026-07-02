import { Entity, Column, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

@Entity('petty_cash', { schema: 'public' })
export class PettyCash extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty()
  @Column({ length: 200 })
  name: string;

  @ApiProperty()
  @Column({ length: 200 })
  custodian: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  treasuryId?: string;

  @ApiProperty({ default: 0 })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  balance: number;

  @ApiProperty({ default: true })
  @Column({ default: true })
  isActive: boolean;
}
