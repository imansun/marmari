import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NotificationTemplateCounterPart' })
export class LegacyNotificationTemplateCounterPart {
  @PrimaryColumn({ type: 'bigint', name: 'NotificationTemplateCounterPartID' })
  notificationTemplateCounterPartID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'CounterPartTypeCode' })
  counterPartTypeCode: number;

  @Column({ type: 'boolean', name: 'Required' })
  required: boolean;

  @Column({ type: 'boolean', name: 'RelatedToTeam' })
  relatedToTeam: boolean;

  @Column({ type: 'bigint', name: 'NotificationTemplateRef' })
  notificationTemplateRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}