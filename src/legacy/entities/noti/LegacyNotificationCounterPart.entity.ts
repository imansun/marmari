import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NotificationCounterPart' })
export class LegacyNotificationCounterPart {
  @PrimaryColumn({ type: 'bigint', name: 'NotificationCounterPartID' })
  notificationCounterPartID: number;

  @Column({ type: 'bigint', name: 'NotificationRef' })
  notificationRef: number;

  @Column({ type: 'bigint', name: 'NotificationTemplateCounterPartRef' })
  notificationTemplateCounterPartRef: number;

  @Column({ type: 'bigint', name: 'ValueRef', nullable: true })
  valueRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}