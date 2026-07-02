import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Retirement123FormReportSettingStatuteType' })
export class LegacyRetirement123FormReportSettingStatuteType {
  @PrimaryColumn({ type: 'bigint', name: 'Retirement123FormReportSettingStatuteTypeID' })
  retirement123FormReportSettingStatuteTypeID: number;

  @Column({ type: 'bigint', name: 'Retirement123FormReportSettingRef' })
  retirement123FormReportSettingRef: number;

  @Column({ type: 'bigint', name: 'StatuteTypeRef' })
  statuteTypeRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}