import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceViewConfigurationFactor' })
export class LegacyAttendanceViewConfigurationFactor {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceViewConfigurationFactorID' })
  attendanceViewConfigurationFactorID: number;

  @Column({ type: 'bigint', name: 'AttendanceViewConfigurationRef' })
  attendanceViewConfigurationRef: number;

  @Column({ type: 'bigint', name: 'AttendanceFactorRef' })
  attendanceFactorRef: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}