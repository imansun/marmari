import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NotificationDamage' })
export class LegacyNotificationDamage {
  @PrimaryColumn({ type: 'bigint', name: 'NotificationDamageID' })
  notificationDamageID: number;

  @Column({ type: 'bigint', name: 'NotificationRef' })
  notificationRef: number;

  @Column({ type: 'bigint', name: 'DamageGroupRef' })
  damageGroupRef: number;

  @Column({ type: 'bigint', name: 'DamageRef' })
  damageRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}