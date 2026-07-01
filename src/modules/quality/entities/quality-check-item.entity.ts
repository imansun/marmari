import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { QualityCheck } from './quality-check.entity';

export enum CheckResult {
  PASS = 'pass',
  FAIL = 'fail',
}

@Entity('quality_check_items', { schema: 'public' })
export class QualityCheckItem extends BaseEntity {
  @ManyToOne(() => QualityCheck, (qc) => qc.items, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'qualityCheckId' })
  qualityCheck: QualityCheck;

  @ApiProperty()
  @Column()
  qualityCheckId: string;

  @ApiProperty()
  @Column({ length: 200 })
  parameter: string;

  @ApiProperty()
  @Column({ length: 200 })
  expectedValue: string;

  @ApiProperty()
  @Column({ length: 200 })
  actualValue: string;

  @ApiProperty({ enum: CheckResult })
  @Column({ type: 'enum', enum: CheckResult })
  result: CheckResult;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  notes?: string;
}
