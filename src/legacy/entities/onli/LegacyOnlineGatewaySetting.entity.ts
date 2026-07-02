import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OnlineGatewaySetting' })
export class LegacyOnlineGatewaySetting {
  @PrimaryColumn({ type: 'bigint', name: 'OnlineGatewaySettingID' })
  onlineGatewaySettingID: number;

  @Column({ type: 'bigint', name: 'OnlineGatewayRef' })
  onlineGatewayRef: number;

  @Column({ type: 'character varying', name: 'SettingKey' })
  settingKey: string;

  @Column({ type: 'character varying', name: 'SettingName' })
  settingName: string;

  @Column({ type: 'character varying', name: 'SettingValue', nullable: true })
  settingValue: string | null;

  @Column({ type: 'boolean', name: 'IsUserAccountSetting', default: false })
  isUserAccountSetting: boolean;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}