import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReportSettingCompensationFactor' })
export class LegacyReportSettingCompensationFactor {
  @PrimaryColumn({ type: 'bigint', name: 'ReportSettingCompensationFactorID' })
  reportSettingCompensationFactorID: number;

  @Column({ type: 'bigint', name: 'ReportSettingItemRef' })
  reportSettingItemRef: number;

  @Column({ type: 'bigint', name: 'CompensationFactorRef' })
  compensationFactorRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'DisplayTitle', nullable: true })
  displayTitle: string | null;

  @Column({ type: 'integer', name: 'Order', default: 0 })
  order: number;

}