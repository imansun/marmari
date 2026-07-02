import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TargetGroupExecutiveAgreementStep' })
export class LegacyTargetGroupExecutiveAgreementStep {
  @PrimaryColumn({ type: 'bigint', name: 'TargetGroupExecutiveAgreementStepID' })
  targetGroupExecutiveAgreementStepID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef', nullable: true })
  employeeRef: number | null;

  @Column({ type: 'bigint', name: 'TargetGroupExecutiveRef' })
  targetGroupExecutiveRef: number;

  @Column({ type: 'bigint', name: 'PeriodAgreementStepRef' })
  periodAgreementStepRef: number;

  @Column({ type: 'integer', name: 'AgreementStep' })
  agreementStep: number;

  @Column({ type: 'boolean', name: 'HasNoExecutiveCondition' })
  hasNoExecutiveCondition: boolean;

  @Column({ type: 'boolean', name: 'IgnoreStepEndDate' })
  ignoreStepEndDate: boolean;

  @Column({ type: 'boolean', name: 'Selected' })
  selected: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}