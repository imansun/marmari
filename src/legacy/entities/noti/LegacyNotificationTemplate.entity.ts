import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NotificationTemplate' })
export class LegacyNotificationTemplate {
  @PrimaryColumn({ type: 'bigint', name: 'NotificationTemplateID' })
  notificationTemplateID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'NotificationType' })
  notificationType: number;

  @Column({ type: 'integer', name: 'RelatedEntityCode' })
  relatedEntityCode: number;

  @Column({ type: 'boolean', name: 'HasTask' })
  hasTask: boolean;

  @Column({ type: 'boolean', name: 'HasQuantitativeInformation' })
  hasQuantitativeInformation: boolean;

  @Column({ type: 'boolean', name: 'ShowBatch' })
  showBatch: boolean;

  @Column({ type: 'boolean', name: 'RelatedToDefect' })
  relatedToDefect: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}