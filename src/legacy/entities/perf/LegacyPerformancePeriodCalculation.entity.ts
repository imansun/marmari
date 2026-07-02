import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PerformancePeriodCalculation' })
export class LegacyPerformancePeriodCalculation {
  @PrimaryColumn({ type: 'bigint', name: 'PerformancePeriodCalculationID' })
  performancePeriodCalculationID: number;

  @Column({ type: 'bigint', name: 'PerformancePeriodRef' })
  performancePeriodRef: number;

  @Column({ type: 'bigint', name: 'AppraiseeRef' })
  appraiseeRef: number;

  @Column({ type: 'integer', name: 'IssueYearMonth' })
  issueYearMonth: number;

  @Column({ type: 'timestamp without time zone', name: 'RegistrationDate' })
  registrationDate: Date;

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

  @Column({ type: 'smallint', name: 'State' })
  state: number;

}