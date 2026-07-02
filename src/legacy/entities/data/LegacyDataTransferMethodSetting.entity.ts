import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DataTransferMethodSetting' })
export class LegacyDataTransferMethodSetting {
  @PrimaryColumn({ type: 'bigint', name: 'DataTransferMethodSettingID' })
  dataTransferMethodSettingID: number;

  @Column({ type: 'bigint', name: 'DataTransferMethodRef' })
  dataTransferMethodRef: number;

  @Column({ type: 'character varying', name: 'SettingKey' })
  settingKey: string;

  @Column({ type: 'character varying', name: 'SettingValue', nullable: true })
  settingValue: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}