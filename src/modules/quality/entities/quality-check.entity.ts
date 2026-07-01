import { Entity, Column, Index, OneToMany, JoinColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { QualityCheckItem } from './quality-check-item.entity';

export enum QualityCheckType {
  INCOMING = 'incoming',
  IN_PROCESS = 'in_process',
  FINAL = 'final',
  SHIPPING = 'shipping',
}

export enum QualityCheckStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  PASSED = 'passed',
  FAILED = 'failed',
  REWORK = 'rework',
}

@Entity('quality_checks', { schema: 'public' })
export class QualityCheck extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  @Index()
  code: string;

  @ApiProperty({ enum: QualityCheckType })
  @Column({ type: 'enum', enum: QualityCheckType })
  checkType: QualityCheckType;

  @ApiProperty({
    enum: QualityCheckStatus,
    default: QualityCheckStatus.PENDING,
  })
  @Column({
    type: 'enum',
    enum: QualityCheckStatus,
    default: QualityCheckStatus.PENDING,
  })
  status: QualityCheckStatus;

  @ApiProperty()
  @Column({ length: 50 })
  referenceType: string;

  @ApiProperty()
  @Column()
  referenceId: string;

  @ApiProperty()
  @Column()
  productId: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  inspectorId?: string;

  @ApiProperty()
  @Column({ type: 'timestamptz' })
  checkDate: Date;

  @ApiPropertyOptional()
  @Column({ length: 1000, nullable: true })
  notes?: string;

  @OneToMany(() => QualityCheckItem, (item) => item.qualityCheck, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  items: QualityCheckItem[];
}
