import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TargetGroupExecutiveEvaluationStep' })
export class LegacyTargetGroupExecutiveEvaluationStep {
  @PrimaryColumn({ type: 'bigint', name: 'TargetGroupExecutiveEvaluationStepID' })
  targetGroupExecutiveEvaluationStepID: number;

  @Column({ type: 'bigint', name: 'TargetGroupExecutiveRef' })
  targetGroupExecutiveRef: number;

  @Column({ type: 'bigint', name: 'ProcessEvaluationStepRef' })
  processEvaluationStepRef: number;

  @Column({ type: 'boolean', name: 'IgnoreStepEndDate' })
  ignoreStepEndDate: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}