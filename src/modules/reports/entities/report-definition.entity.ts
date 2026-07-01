import { Entity, Column, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

export enum ReportCategory {
  FINANCIAL = 'financial',
  SALES = 'sales',
  PURCHASE = 'purchase',
  INVENTORY = 'inventory',
  HR = 'hr',
  CUSTOMER = 'customer',
  TAX = 'tax',
  OPERATIONS = 'operations',
  OTHER = 'other',
}

export enum ReportType {
  LIST = 'list',
  SUMMARY = 'summary',
  DETAIL = 'detail',
  CHART = 'chart',
  KPI = 'kpi',
}

@Entity('report_definitions')
export class ReportDefinition extends BaseEntity {
  @ApiProperty()
  @Column({ unique: true, length: 50 })
  @Index()
  code: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  description: string;

  @ApiProperty({ enum: ReportCategory })
  @Column({ type: 'varchar', length: 20 })
  category: ReportCategory;

  @ApiProperty({ enum: ReportType })
  @Column({ type: 'varchar', length: 10, default: ReportType.LIST })
  reportType: ReportType;

  @ApiPropertyOptional()
  @Column({ type: 'text', nullable: true })
  query: string;

  @ApiPropertyOptional()
  @Column({ type: 'jsonb', nullable: true })
  parameters: Record<string, unknown>[];

  @ApiPropertyOptional()
  @Column({ type: 'jsonb', nullable: true })
  columns: Record<string, unknown>[];

  @ApiProperty()
  @Column({ default: false })
  isSystem: boolean;

  @ApiProperty()
  @Column({ default: true })
  isActive: boolean;
}
