import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LeaveTypeAttendanceStatus' })
export class LegacyLeaveTypeAttendanceStatus {
  @PrimaryColumn({ type: 'bigint', name: 'LeaveTypeAttendanceStatusID' })
  leaveTypeAttendanceStatusID: number;

  @Column({ type: 'bigint', name: 'LeaveTypeRef' })
  leaveTypeRef: number;

  @Column({ type: 'bigint', name: 'AttendanceStatusRef', nullable: true })
  attendanceStatusRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}