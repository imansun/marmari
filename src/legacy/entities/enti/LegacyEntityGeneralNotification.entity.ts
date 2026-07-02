import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EntityGeneralNotification' })
export class LegacyEntityGeneralNotification {
  @PrimaryColumn({ type: 'bigint', name: 'EntityGeneralNotificationID' })
  entityGeneralNotificationID: number;

  @Column({ type: 'bigint', name: 'EntityEventRef' })
  entityEventRef: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'integer', name: 'PreviousState', nullable: true })
  previousState: number | null;

  @Column({ type: 'integer', name: 'CurrentState', nullable: true })
  currentState: number | null;

  @Column({ type: 'character varying', name: 'Filter', nullable: true })
  filter: string | null;

  @Column({ type: 'integer', name: 'NotificationMethod' })
  notificationMethod: number;

  @Column({ type: 'character varying', name: 'Title', nullable: true })
  title: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}