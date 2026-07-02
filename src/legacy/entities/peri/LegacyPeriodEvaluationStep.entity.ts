import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PeriodEvaluationStep' })
export class LegacyPeriodEvaluationStep {
  @PrimaryColumn({ type: 'bigint', name: 'PeriodEvaluationStepID' })
  periodEvaluationStepID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate' })
  endDate: Date;

  @Column({ type: 'bigint', name: 'ProcessEvaluationStepRef' })
  processEvaluationStepRef: number;

  @Column({ type: 'bigint', name: 'PerformancePeriodRef' })
  performancePeriodRef: number;

}