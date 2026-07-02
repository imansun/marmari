import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LeaveTypeProperty' })
export class LegacyLeaveTypeProperty {
  @PrimaryColumn({ type: 'bigint', name: 'LeaveTypePropertyID' })
  leaveTypePropertyID: number;

  @Column({ type: 'bigint', name: 'LeaveTypeRef' })
  leaveTypeRef: number;

  @Column({ type: 'bigint', name: 'EmploymentTypeRef', nullable: true })
  employmentTypeRef: number | null;

  @Column({ type: 'bigint', name: 'WorkingGroupRef', nullable: true })
  workingGroupRef: number | null;

  @Column({ type: 'integer', name: 'WorkLocationCode', nullable: true })
  workLocationCode: number | null;

  @Column({ type: 'bigint', name: 'BranchRef', nullable: true })
  branchRef: number | null;

  @Column({ type: 'integer', name: 'ApplyYearMonth' })
  applyYearMonth: number;

  @Column({ type: 'integer', name: 'EntitlementDays' })
  entitlementDays: number;

  @Column({ type: 'integer', name: 'EntitlementHours' })
  entitlementHours: number;

  @Column({ type: 'integer', name: 'EntitlementMinutes' })
  entitlementMinutes: number;

  @Column({ type: 'integer', name: 'MaxAnnualTransferDays' })
  maxAnnualTransferDays: number;

  @Column({ type: 'integer', name: 'MaxAnnualTransferHours' })
  maxAnnualTransferHours: number;

  @Column({ type: 'integer', name: 'MaxAnnualTransferMinutes' })
  maxAnnualTransferMinutes: number;

  @Column({ type: 'integer', name: 'MaxMonthlyTransferDays' })
  maxMonthlyTransferDays: number;

  @Column({ type: 'integer', name: 'MaxMonthlyTransferHours' })
  maxMonthlyTransferHours: number;

  @Column({ type: 'integer', name: 'MaxMonthlyTransferMinutes' })
  maxMonthlyTransferMinutes: number;

  @Column({ type: 'boolean', name: 'ConsiderEmployeeSacrificeStatus' })
  considerEmployeeSacrificeStatus: boolean;

  @Column({ type: 'integer', name: 'MaxHourlyDurationInYearOrMonthDays', nullable: true })
  maxHourlyDurationInYearOrMonthDays: number | null;

  @Column({ type: 'integer', name: 'MaxHourlyDurationInYearOrMonthHours', nullable: true })
  maxHourlyDurationInYearOrMonthHours: number | null;

  @Column({ type: 'integer', name: 'MaxHourlyDurationInYearOrMonthMinutes', nullable: true })
  maxHourlyDurationInYearOrMonthMinutes: number | null;

  @Column({ type: 'integer', name: 'MaxHourlyDurationInDay', nullable: true })
  maxHourlyDurationInDay: number | null;

  @Column({ type: 'integer', name: 'MaxHourlyCountInMonth', nullable: true })
  maxHourlyCountInMonth: number | null;

  @Column({ type: 'boolean', name: 'Status' })
  status: boolean;

  @Column({ type: 'boolean', name: 'HasFormula' })
  hasFormula: boolean;

  @Column({ type: 'bigint', name: 'FormulaRef', nullable: true })
  formulaRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'EntitlementAssignMethodCode' })
  entitlementAssignMethodCode: number;

  @Column({ type: 'integer', name: 'LeaveInsertionTypeCode' })
  leaveInsertionTypeCode: number;

  @Column({ type: 'integer', name: 'NegativeRemainType' })
  negativeRemainType: number;

  @Column({ type: 'integer', name: 'MaxNegativeDay', default: 0 })
  maxNegativeDay: number;

  @Column({ type: 'integer', name: 'MaxNegativeHour', default: 0 })
  maxNegativeHour: number;

  @Column({ type: 'integer', name: 'MaxNegativeMinute', default: 0 })
  maxNegativeMinute: number;

  @Column({ type: 'boolean', name: 'AccomulateAnnualRemains' })
  accomulateAnnualRemains: boolean;

  @Column({ type: 'boolean', name: 'AutomaticCalculable', default: false })
  automaticCalculable: boolean;

}