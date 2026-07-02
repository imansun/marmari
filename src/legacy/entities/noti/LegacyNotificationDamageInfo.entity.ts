import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NotificationDamageInfo' })
export class LegacyNotificationDamageInfo {
  @PrimaryColumn({ type: 'bigint', name: 'NotificationDamageInfoID' })
  notificationDamageInfoID: number;

  @Column({ type: 'bigint', name: 'NotificationRef' })
  notificationRef: number;

  @Column({ type: 'timestamp without time zone', name: 'StartDate', nullable: true })
  startDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'boolean', name: 'Breakdown' })
  breakdown: boolean;

  @Column({ type: 'numeric', name: 'BreakdownDuration', nullable: true })
  breakdownDuration: number | null;

  @Column({ type: 'bigint', name: 'BreakdownDurationUnitRef', nullable: true })
  breakdownDurationUnitRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}