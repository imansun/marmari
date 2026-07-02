import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PeriodicCalcItem' })
export class LegacyPeriodicCalcItem {
  @PrimaryColumn({ type: 'bigint', name: 'PeriodicCalcItemID' })
  periodicCalcItemID: number;

  @Column({ type: 'bigint', name: 'PeriodicCalcRef' })
  periodicCalcRef: number;

  @Column({ type: 'bigint', name: 'CompensationFactorPropertyRef' })
  compensationFactorPropertyRef: number;

  @Column({ type: 'bigint', name: 'CompensationFactorRef' })
  compensationFactorRef: number;

  @Column({ type: 'numeric', name: 'Value' })
  value: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'integer', name: 'IssueYearMonth' })
  issueYearMonth: number;

}