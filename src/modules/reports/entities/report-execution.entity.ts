import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { ReportDefinition } from './report-definition.entity';

export enum ExecutionStatus {
  PENDING = 'pending',
  RUNNING = 'running',
  DONE = 'done',
  FAILED = 'failed',
}

@Entity('report_executions')
export class ReportExecution extends BaseEntity {
  @ApiProperty()
  @Column()
  @Index()
  reportId: string;

  @ApiProperty()
  @Column()
  executedById: string;

  @ApiProperty({ enum: ExecutionStatus })
  @Column({ type: 'varchar', length: 10, default: ExecutionStatus.PENDING })
  status: ExecutionStatus;

  @ApiPropertyOptional()
  @Column({ type: 'jsonb', nullable: true })
  parameters: Record<string, unknown>;

  @ApiPropertyOptional()
  @Column({ type: 'jsonb', nullable: true })
  result: Record<string, unknown>[];

  @ApiPropertyOptional()
  @Column({ type: 'int', nullable: true })
  rowCount: number;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  error: string;

  @ApiProperty()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  executedAt: Date;

  @ApiProperty()
  @Column({ type: 'int', nullable: true })
  duration: number;

  @ManyToOne(() => ReportDefinition, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'reportId' })
  report: ReportDefinition;
}
