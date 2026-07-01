import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { Dashboard } from './dashboard.entity';

export enum WidgetType {
  CHART = 'chart',
  TABLE = 'table',
  METRIC = 'metric',
  KPI = 'kpi',
  REPORT = 'report',
  TEXT = 'text',
}

@Entity('dashboard_widgets')
export class DashboardWidget extends BaseEntity {
  @ApiProperty()
  @Column()
  dashboardId: string;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty({ enum: WidgetType })
  @Column({ type: 'varchar', length: 10, default: WidgetType.METRIC })
  type: WidgetType;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  reportId: string;

  @ApiPropertyOptional()
  @Column({ type: 'jsonb', nullable: true })
  position: Record<string, number>;

  @ApiPropertyOptional()
  @Column({ type: 'jsonb', nullable: true })
  options: Record<string, unknown>;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  dataSource: string;

  @ManyToOne(() => Dashboard, (d) => d.widgets, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'dashboardId' })
  dashboard: Dashboard;
}
