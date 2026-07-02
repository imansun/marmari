import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessAgreementStep' })
export class LegacyProcessAgreementStep {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessAgreementStepID' })
  processAgreementStepID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'Step' })
  step: number;

  @Column({ type: 'bigint', name: 'EmployeeConditionRef' })
  employeeConditionRef: number;

  @Column({ type: 'bigint', name: 'PerformanceManagementProcessRef' })
  performanceManagementProcessRef: number;

}