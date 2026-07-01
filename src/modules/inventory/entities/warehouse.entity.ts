import { Entity, Column, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

@Entity('warehouses', { schema: 'public' })
export class Warehouse extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty()
  @Column({ length: 200 })
  name: string;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  address?: string;

  @ApiPropertyOptional()
  @Column({ length: 50, nullable: true })
  phone?: string;

  @ApiProperty({ default: true })
  @Column({ default: true })
  isActive: boolean;
}
