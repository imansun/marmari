import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeRetirementForm39' })
export class LegacyEmployeeRetirementForm39 {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeRetirementForm39ID' })
  employeeRetirementForm39ID: number;

  @Column({ type: 'bigint', name: 'EmployeeRetirementFormRef' })
  employeeRetirementFormRef: number;

  @Column({ type: 'timestamp without time zone', name: 'FromDate' })
  fromDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ToDate' })
  toDate: Date;

  @Column({ type: 'numeric', name: 'DeductionCalcBase' })
  deductionCalcBase: number;

  @Column({ type: 'numeric', name: 'DebtAmount' })
  debtAmount: number;

  @Column({ type: 'character varying', name: 'DeductionDepositNumber' })
  deductionDepositNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'DeductionDepositDate' })
  deductionDepositDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'DepositDate' })
  depositDate: Date;

  @Column({ type: 'character varying', name: 'Consideration', nullable: true })
  consideration: string | null;

  @Column({ type: 'integer', name: 'DayTime' })
  dayTime: number;

  @Column({ type: 'character varying', name: 'OrganizationTitle' })
  organizationTitle: string;

  @Column({ type: 'integer', name: 'Day' })
  day: number;

  @Column({ type: 'integer', name: 'Month' })
  month: number;

  @Column({ type: 'integer', name: 'Year' })
  year: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}