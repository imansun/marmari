import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NotificationTask' })
export class LegacyNotificationTask {
  @PrimaryColumn({ type: 'bigint', name: 'NotificationTaskID' })
  notificationTaskID: number;

  @Column({ type: 'bigint', name: 'NotificationRef' })
  notificationRef: number;

  @Column({ type: 'bigint', name: 'TaskRef' })
  taskRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'DefectRecordingRef', nullable: true })
  defectRecordingRef: number | null;

}