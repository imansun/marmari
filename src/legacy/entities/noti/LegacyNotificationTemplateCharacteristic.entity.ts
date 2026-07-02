import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NotificationTemplateCharacteristic' })
export class LegacyNotificationTemplateCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'NotificationTemplateCharacteristicID' })
  notificationTemplateCharacteristicID: number;

  @Column({ type: 'boolean', name: 'Required' })
  required: boolean;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'bigint', name: 'NotificationTemplateRef' })
  notificationTemplateRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}