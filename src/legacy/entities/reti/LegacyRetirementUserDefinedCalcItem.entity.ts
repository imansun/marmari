import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetirementUserDefinedCalcItem' })
export class LegacyRetirementUserDefinedCalcItem {
  @PrimaryColumn({ type: 'bigint', name: 'RetirementUserDefinedCalcItemID' })
  retirementUserDefinedCalcItemID: number;

  @Column({ type: 'bigint', name: 'RetirementUserDefinedCalcRef' })
  retirementUserDefinedCalcRef: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bigint', name: 'CompensationFactorRef' })
  compensationFactorRef: number;

  @Column({ type: 'bigint', name: 'CompensationFactorPropertyRef' })
  compensationFactorPropertyRef: number;

  @Column({ type: 'integer', name: 'IssueYearMonth' })
  issueYearMonth: number;

  @Column({ type: 'integer', name: 'ApplyYearMonth' })
  applyYearMonth: number;

  @Column({ type: 'numeric', name: 'Value' })
  value: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'RelativeRef', nullable: true })
  relativeRef: number | null;

}