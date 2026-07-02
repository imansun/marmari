import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShellNotification' })
export class LegacyShellNotification {
  @PrimaryColumn({ type: 'bigint', name: 'ShellNotificationID' })
  shellNotificationID: number;

  @Column({ type: 'character varying', name: 'Title', nullable: true })
  title: string | null;

  @Column({ type: 'character varying', name: 'Body' })
  body: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'Icon', nullable: true })
  icon: string | null;

  @Column({ type: 'timestamp without time zone', name: 'DateTime' })
  dateTime: Date;

  @Column({ type: 'boolean', name: 'AutoDismiss' })
  autoDismiss: boolean;

  @Column({ type: 'integer', name: 'ActionType', nullable: true })
  actionType: number | null;

  @Column({ type: 'text', name: 'Action', nullable: true })
  action: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}