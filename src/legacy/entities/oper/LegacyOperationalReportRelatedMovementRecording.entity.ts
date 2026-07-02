import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OperationalReportRelatedMovementRecording' })
export class LegacyOperationalReportRelatedMovementRecording {
  @PrimaryColumn({ type: 'bigint', name: 'OperationalReportRelatedMovementRecordingID' })
  operationalReportRelatedMovementRecordingID: number;

  @Column({ type: 'bigint', name: 'OperationalReportRef' })
  operationalReportRef: number;

  @Column({ type: 'bigint', name: 'MovementRecordingRef' })
  movementRecordingRef: number;

  @Column({ type: 'timestamp without time zone', name: 'MovementRecordingRecordingDate' })
  movementRecordingRecordingDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'MovementRecordingLastModificationDate' })
  movementRecordingLastModificationDate: Date;

  @Column({ type: 'bytea', name: 'MovementRecordingVersion' })
  movementRecordingVersion: Buffer;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}