import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NotificationCharacteristic' })
export class LegacyNotificationCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'NotificationCharacteristicID' })
  notificationCharacteristicID: number;

  @Column({ type: 'bigint', name: 'NotificationRef' })
  notificationRef: number;

  @Column({ type: 'bigint', name: 'NotificationTemplateCharacteristicRef' })
  notificationTemplateCharacteristicRef: number;

  @Column({ type: 'character varying', name: 'CharacteristicValue', nullable: true })
  characteristicValue: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}