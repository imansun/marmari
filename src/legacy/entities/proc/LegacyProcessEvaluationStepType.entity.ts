import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessEvaluationStepType' })
export class LegacyProcessEvaluationStepType {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessEvaluationStepTypeID' })
  processEvaluationStepTypeID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'AppraisalDimension' })
  appraisalDimension: number;

  @Column({ type: 'numeric', name: 'Weight' })
  weight: number;

  @Column({ type: 'bigint', name: 'EmployeeConditionRef', nullable: true })
  employeeConditionRef: number | null;

  @Column({ type: 'bigint', name: 'ProcessEvaluationStepRef' })
  processEvaluationStepRef: number;

}