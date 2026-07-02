import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StoredNotification' })
export class LegacyStoredNotification {
  @PrimaryColumn({ type: 'bigint', name: 'StoredNotificationID' })
  storedNotificationID: number;

  @Column({ type: 'character varying', name: 'Message' })
  message: string;

  @Column({ type: 'timestamp without time zone', name: 'StoringTime' })
  storingTime: Date;

  @Column({ type: 'timestamp without time zone', name: 'ReceivedTime' })
  receivedTime: Date;

  @Column({ type: 'character varying', name: 'LastException' })
  lastException: string;

  @Column({ type: 'boolean', name: 'IsActive', default: true })
  isActive: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}