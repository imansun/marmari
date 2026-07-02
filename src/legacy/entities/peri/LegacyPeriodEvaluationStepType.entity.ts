import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PeriodEvaluationStepType' })
export class LegacyPeriodEvaluationStepType {
  @PrimaryColumn({ type: 'bigint', name: 'PeriodEvaluationStepTypeID' })
  periodEvaluationStepTypeID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'IssueDate', nullable: true })
  issueDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'ResponseDueDate', nullable: true })
  responseDueDate: Date | null;

  @Column({ type: 'bigint', name: 'AppraisalPatternRef', nullable: true })
  appraisalPatternRef: number | null;

  @Column({ type: 'bigint', name: 'ProcessEvaluationStepTypeRef' })
  processEvaluationStepTypeRef: number;

  @Column({ type: 'bigint', name: 'PeriodEvaluationStepRef' })
  periodEvaluationStepRef: number;

  @Column({ type: 'bigint', name: 'MandatoryDistributionStructureRef', nullable: true })
  mandatoryDistributionStructureRef: number | null;

  @Column({ type: 'bigint', name: 'PostRef', nullable: true })
  postRef: number | null;

  @Column({ type: 'bigint', name: 'DepartmentRef', nullable: true })
  departmentRef: number | null;

  @Column({ type: 'bigint', name: 'EmploymentTypeRef', nullable: true })
  employmentTypeRef: number | null;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

}