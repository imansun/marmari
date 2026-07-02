import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NotificationDefectRecording' })
export class LegacyNotificationDefectRecording {
  @PrimaryColumn({ type: 'bigint', name: 'NotificationDefectRecordingID' })
  notificationDefectRecordingID: number;

  @Column({ type: 'bigint', name: 'NotificationRef' })
  notificationRef: number;

  @Column({ type: 'bigint', name: 'DefectRecordingRef' })
  defectRecordingRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}