import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TelegramSession' })
export class LegacyTelegramSession {
  @PrimaryColumn({ type: 'bigint', name: 'TelegramSessionID' })
  telegramSessionID: number;

  @Column({ type: 'character varying', name: 'Data', nullable: true })
  data: string | null;

  @Column({ type: 'character varying', name: 'ChannelName' })
  channelName: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}