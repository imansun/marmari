import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NotificationDamageReason' })
export class LegacyNotificationDamageReason {
  @PrimaryColumn({ type: 'bigint', name: 'NotificationDamageReasonID' })
  notificationDamageReasonID: number;

  @Column({ type: 'bigint', name: 'NotificationDamageRef' })
  notificationDamageRef: number;

  @Column({ type: 'bigint', name: 'DamageReasonGroupRef' })
  damageReasonGroupRef: number;

  @Column({ type: 'bigint', name: 'DamageReasonRef' })
  damageReasonRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}