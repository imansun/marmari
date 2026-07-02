import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MissionDocumentAttendanceData' })
export class LegacyMissionDocumentAttendanceData {
  @PrimaryColumn({ type: 'bigint', name: 'MissionDocumentAttendanceDataID' })
  missionDocumentAttendanceDataID: number;

  @Column({ type: 'bigint', name: 'MissionDocumentRef' })
  missionDocumentRef: number;

  @Column({ type: 'bigint', name: 'AttendanceDataRef' })
  attendanceDataRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}