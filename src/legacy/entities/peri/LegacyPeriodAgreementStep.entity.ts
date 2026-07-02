import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PeriodAgreementStep' })
export class LegacyPeriodAgreementStep {
  @PrimaryColumn({ type: 'bigint', name: 'PeriodAgreementStepID' })
  periodAgreementStepID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate' })
  endDate: Date;

  @Column({ type: 'bigint', name: 'ProcessAgreementStepRef' })
  processAgreementStepRef: number;

  @Column({ type: 'bigint', name: 'PerformancePeriodRef' })
  performancePeriodRef: number;

}