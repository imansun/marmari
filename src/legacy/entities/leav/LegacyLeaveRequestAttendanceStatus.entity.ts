import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LeaveRequestAttendanceStatus' })
export class LegacyLeaveRequestAttendanceStatus {
  @PrimaryColumn({ type: 'bigint', name: 'LeaveRequestAttendanceStatusID' })
  leaveRequestAttendanceStatusID: number;

  @Column({ type: 'bigint', name: 'LeaveRequestRef' })
  leaveRequestRef: number;

  @Column({ type: 'bigint', name: 'AttendanceStatusRef' })
  attendanceStatusRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}