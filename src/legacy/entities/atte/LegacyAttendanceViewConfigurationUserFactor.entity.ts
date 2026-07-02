import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceViewConfigurationUserFactor' })
export class LegacyAttendanceViewConfigurationUserFactor {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceViewConfigurationUserFactorID' })
  attendanceViewConfigurationUserFactorID: number;

  @Column({ type: 'bigint', name: 'AttendanceViewConfigurationRef' })
  attendanceViewConfigurationRef: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'bigint', name: 'AttendanceFactorRef' })
  attendanceFactorRef: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}