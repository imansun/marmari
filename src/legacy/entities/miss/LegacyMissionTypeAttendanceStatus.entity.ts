import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MissionTypeAttendanceStatus' })
export class LegacyMissionTypeAttendanceStatus {
  @PrimaryColumn({ type: 'bigint', name: 'MissionTypeAttendanceStatusID' })
  missionTypeAttendanceStatusID: number;

  @Column({ type: 'bigint', name: 'MissionTypeRef' })
  missionTypeRef: number;

  @Column({ type: 'bigint', name: 'AttendanceStatusRef' })
  attendanceStatusRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}