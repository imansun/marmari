import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'UserShellNotification' })
export class LegacyUserShellNotification {
  @PrimaryColumn({ type: 'bigint', name: 'UserShellNotificationID' })
  userShellNotificationID: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'bigint', name: 'ShellNotificationRef' })
  shellNotificationRef: number;

  @Column({ type: 'boolean', name: 'IsRead' })
  isRead: boolean;

  @Column({ type: 'boolean', name: 'IsDismissed' })
  isDismissed: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'TranslatedTitle', nullable: true })
  translatedTitle: string | null;

  @Column({ type: 'character varying', name: 'TranslatedBody', nullable: true })
  translatedBody: string | null;

}