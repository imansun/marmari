import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessEvaluationStep' })
export class LegacyProcessEvaluationStep {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessEvaluationStepID' })
  processEvaluationStepID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'Step' })
  step: number;

  @Column({ type: 'bigint', name: 'PerformanceManagementProcessRef' })
  performanceManagementProcessRef: number;

}