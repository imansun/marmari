import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NotificationTemplateReference' })
export class LegacyNotificationTemplateReference {
  @PrimaryColumn({ type: 'bigint', name: 'NotificationTemplateReferenceID' })
  notificationTemplateReferenceID: number;

  @Column({ type: 'integer', name: 'ReferenceEntityCode' })
  referenceEntityCode: number;

  @Column({ type: 'bigint', name: 'NotificationTemplateRef' })
  notificationTemplateRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}