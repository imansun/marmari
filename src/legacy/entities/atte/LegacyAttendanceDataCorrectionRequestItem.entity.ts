import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceDataCorrectionRequestItem' })
export class LegacyAttendanceDataCorrectionRequestItem {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceDataCorrectionRequestItemID' })
  attendanceDataCorrectionRequestItemID: number;

  @Column({ type: 'integer', name: 'Time' })
  time: number;

  @Column({ type: 'boolean', name: 'Entrance' })
  entrance: boolean;

  @Column({ type: 'bigint', name: 'AttendanceStatusRef' })
  attendanceStatusRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'AttendanceDataCorrectionRequestRef' })
  attendanceDataCorrectionRequestRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}