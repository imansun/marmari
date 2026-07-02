import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NotificationChannelConfig' })
export class LegacyNotificationChannelConfig {
  @PrimaryColumn({ type: 'bigint', name: 'NotificationChannelConfigID' })
  notificationChannelConfigID: number;

  @Column({ type: 'character varying', name: 'ChannelTypeName' })
  channelTypeName: string;

  @Column({ type: 'character varying', name: 'Config' })
  config: string;

  @Column({ type: 'character varying', name: 'ChannelName' })
  channelName: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}