import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NotificationChannelState' })
export class LegacyNotificationChannelState {
  @PrimaryColumn({ type: 'bigint', name: 'NotificationChannelStateID' })
  notificationChannelStateID: number;

  @Column({ type: 'character varying', name: 'ChannelUniqueName' })
  channelUniqueName: string;

  @Column({ type: 'character varying', name: 'Key' })
  key: string;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}