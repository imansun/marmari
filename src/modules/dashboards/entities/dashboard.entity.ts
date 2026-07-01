import { Entity, Column, OneToMany } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { DashboardWidget } from './dashboard-widget.entity';

@Entity('dashboards')
export class Dashboard extends BaseEntity {
  @ApiProperty()
  @Column({ unique: true, length: 50 })
  code: string;

  @ApiProperty()
  @Column()
  title: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  description: string;

  @ApiPropertyOptional()
  @Column({ type: 'jsonb', nullable: true })
  layout: Record<string, unknown>;

  @ApiProperty()
  @Column({ default: false })
  isDefault: boolean;

  @ApiProperty()
  @Column({ default: false })
  isSystem: boolean;

  @ApiProperty()
  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => DashboardWidget, (w) => w.dashboard, { cascade: true })
  widgets: DashboardWidget[];
}
