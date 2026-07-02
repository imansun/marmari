import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TelegramUser' })
export class LegacyTelegramUser {
  @PrimaryColumn({ type: 'bigint', name: 'TelegramUserID' })
  telegramUserID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'ChannelName' })
  channelName: string;

  @Column({ type: 'bigint', name: 'PartyRef', nullable: true })
  partyRef: number | null;

  @Column({ type: 'bigint', name: 'TelegramID' })
  telegramID: number;

  @Column({ type: 'timestamp without time zone', name: 'LastInvite', nullable: true })
  lastInvite: Date | null;

  @Column({ type: 'bigint', name: 'ChatId', nullable: true })
  chatId: number | null;

  @Column({ type: 'character varying', name: 'CurrentCommand', nullable: true })
  currentCommand: string | null;

  @Column({ type: 'timestamp without time zone', name: 'CurrentCommandExecuteTime', nullable: true })
  currentCommandExecuteTime: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}