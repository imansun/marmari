import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetirementCalcItem' })
export class LegacyRetirementCalcItem {
  @PrimaryColumn({ type: 'bigint', name: 'RetirementCalcItemID' })
  retirementCalcItemID: number;

  @Column({ type: 'bigint', name: 'RetirementCalcRef' })
  retirementCalcRef: number;

  @Column({ type: 'bigint', name: 'CompensationFactorRef' })
  compensationFactorRef: number;

  @Column({ type: 'bigint', name: 'CompensationFactorPropertyRef' })
  compensationFactorPropertyRef: number;

  @Column({ type: 'integer', name: 'ApplyYearMonth' })
  applyYearMonth: number;

  @Column({ type: 'numeric', name: 'Value' })
  value: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'integer', name: 'IssueYearMonth' })
  issueYearMonth: number;

  @Column({ type: 'bigint', name: 'RelativeRef', nullable: true })
  relativeRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}