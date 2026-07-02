import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PerformancePeriodCalculationItem' })
export class LegacyPerformancePeriodCalculationItem {
  @PrimaryColumn({ type: 'bigint', name: 'PerformancePeriodCalculationItemID' })
  performancePeriodCalculationItemID: number;

  @Column({ type: 'bigint', name: 'PerformancePeriodCalculationRef' })
  performancePeriodCalculationRef: number;

  @Column({ type: 'bigint', name: 'PerformancePeriodFactorRef' })
  performancePeriodFactorRef: number;

  @Column({ type: 'bigint', name: 'PerformancePeriodFactorPropertyRef' })
  performancePeriodFactorPropertyRef: number;

  @Column({ type: 'bigint', name: 'AppraiseeRef' })
  appraiseeRef: number;

  @Column({ type: 'integer', name: 'IssueYearMonth' })
  issueYearMonth: number;

  @Column({ type: 'boolean', name: 'IsFinalResult' })
  isFinalResult: boolean;

  @Column({ type: 'character varying', name: 'EditedValue', nullable: true })
  editedValue: string | null;

  @Column({ type: 'character varying', name: 'CalcValue', nullable: true })
  calcValue: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

}