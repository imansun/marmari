import { Entity, Column, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

export enum WorkCenterType {
  PRODUCTION = 'production',
  ASSEMBLY = 'assembly',
  PACKAGING = 'packaging',
  SERVICE = 'service',
}

@Entity('work_centers', { schema: 'public' })
export class WorkCenter extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty()
  @Column({ length: 200 })
  name: string;

  @ApiProperty({ enum: WorkCenterType })
  @Column({ type: 'enum', enum: WorkCenterType })
  workCenterType: WorkCenterType;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  departmentId?: string;

  @ApiPropertyOptional()
  @Column({ length: 200, nullable: true })
  location?: string;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  capacity?: number;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  efficiency?: number;

  @ApiPropertyOptional({ type: 'number' })
  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0 })
  costPerHour: number;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  supervisorId?: string;

  @ApiProperty({ default: true })
  @Column({ default: true })
  isActive: boolean;
}
