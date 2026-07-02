import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeRetirementForm' })
export class LegacyEmployeeRetirementForm {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeRetirementFormID' })
  employeeRetirementFormID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'integer', name: 'YearMonth' })
  yearMonth: number;

  @Column({ type: 'timestamp without time zone', name: 'IssueDate', nullable: true })
  issueDate: Date | null;

  @Column({ type: 'character varying', name: 'IndicatorOfficeNumber', nullable: true })
  indicatorOfficeNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'boolean', name: 'SupplementalInsuranceDesire' })
  supplementalInsuranceDesire: boolean;

  @Column({ type: 'timestamp without time zone', name: 'InsuranceDate', nullable: true })
  insuranceDate: Date | null;

  @Column({ type: 'bigint', name: 'ReportSettingRef' })
  reportSettingRef: number;

  @Column({ type: 'numeric', name: 'RetirementSalary', nullable: true })
  retirementSalary: number | null;

  @Column({ type: 'numeric', name: 'EffectiveAverageSalary', nullable: true })
  effectiveAverageSalary: number | null;

  @Column({ type: 'boolean', name: 'HasMilitaryServiceInfo', nullable: true })
  hasMilitaryServiceInfo: boolean | null;

}