import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PMSReportFactor' })
export class LegacyPMSReportFactor {
  @PrimaryColumn({ type: 'bigint', name: 'PMSReportFactorId' })
  pMSReportFactorId: number;

  @Column({ type: 'bigint', name: 'PMSReportSettingRef' })
  pMSReportSettingRef: number;

  @Column({ type: 'bigint', name: 'PerformancePeriodFactorRef' })
  performancePeriodFactorRef: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}