import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CompensationInsurance' })
export class LegacyCompensationInsurance {
  @PrimaryColumn({ type: 'bigint', name: 'CompensationInsuranceID' })
  compensationInsuranceID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bigint', name: 'CompensationCalcTypeRef' })
  compensationCalcTypeRef: number;

  @Column({ type: 'bigint', name: 'OrganizationRef' })
  organizationRef: number;

  @Column({ type: 'boolean', name: 'IsTreasury' })
  isTreasury: boolean;

  @Column({ type: 'integer', name: 'IssueYearMonth' })
  issueYearMonth: number;

  @Column({ type: 'integer', name: 'ApplyYearMonth' })
  applyYearMonth: number;

  @Column({ type: 'numeric', name: 'InsurancableFactors' })
  insurancableFactors: number;

  @Column({ type: 'numeric', name: 'SumInsurancableFactors' })
  sumInsurancableFactors: number;

  @Column({ type: 'numeric', name: 'InsuranceMax' })
  insuranceMax: number;

  @Column({ type: 'numeric', name: 'TotalInsuranceBase' })
  totalInsuranceBase: number;

  @Column({ type: 'numeric', name: 'CurrentInsuranceBase' })
  currentInsuranceBase: number;

  @Column({ type: 'numeric', name: 'EffectiveAttendance' })
  effectiveAttendance: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}