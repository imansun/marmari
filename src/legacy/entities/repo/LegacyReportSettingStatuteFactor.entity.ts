import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReportSettingStatuteFactor' })
export class LegacyReportSettingStatuteFactor {
  @PrimaryColumn({ type: 'bigint', name: 'ReportSettingStatuteFactorID' })
  reportSettingStatuteFactorID: number;

  @Column({ type: 'bigint', name: 'ReportSettingItemRef' })
  reportSettingItemRef: number;

  @Column({ type: 'bigint', name: 'StatuteFactorRef' })
  statuteFactorRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}