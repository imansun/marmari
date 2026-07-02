import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FSRCalcPeriod' })
export class LegacyFSRCalcPeriod {
  @PrimaryColumn({ type: 'bigint', name: 'FSRCalcPeriodID' })
  fSRCalcPeriodID: number;

  @Column({ type: 'bigint', name: 'ReportingPeriodRef' })
  reportingPeriodRef: number;

  @Column({ type: 'bigint', name: 'CalcPeriodRef' })
  calcPeriodRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}