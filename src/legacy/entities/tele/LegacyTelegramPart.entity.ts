import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TelegramPart' })
export class LegacyTelegramPart {
  @PrimaryColumn({ type: 'bigint', name: 'TelegramPartID' })
  telegramPartID: number;

  @Column({ type: 'character varying', name: 'Key' })
  key: string;

  @Column({ type: 'boolean', name: 'IsActive' })
  isActive: boolean;

  @Column({ type: 'bigint', name: 'TelegramUserRef', nullable: true })
  telegramUserRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}