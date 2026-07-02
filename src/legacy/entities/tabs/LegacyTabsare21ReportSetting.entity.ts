import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Tabsare21ReportSetting' })
export class LegacyTabsare21ReportSetting {
  @PrimaryColumn({ type: 'bigint', name: 'Tabsare21ReportSettingID' })
  tabsare21ReportSettingID: number;

  @Column({ type: 'bigint', name: 'ReportSettingRef' })
  reportSettingRef: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'character varying', name: 'NationalCode', nullable: true })
  nationalCode: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}