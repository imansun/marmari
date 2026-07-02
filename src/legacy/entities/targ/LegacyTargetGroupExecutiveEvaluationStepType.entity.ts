import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TargetGroupExecutiveEvaluationStepType' })
export class LegacyTargetGroupExecutiveEvaluationStepType {
  @PrimaryColumn({ type: 'bigint', name: 'TargetGroupExecutiveEvaluationStepTypeID' })
  targetGroupExecutiveEvaluationStepTypeID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef', nullable: true })
  employeeRef: number | null;

  @Column({ type: 'bigint', name: 'TargetGroupExecutiveRef' })
  targetGroupExecutiveRef: number;

  @Column({ type: 'bigint', name: 'ProcessEvaluationStepTypeRef' })
  processEvaluationStepTypeRef: number;

  @Column({ type: 'boolean', name: 'HasNoExecutiveCondition' })
  hasNoExecutiveCondition: boolean;

  @Column({ type: 'boolean', name: 'Selected' })
  selected: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}