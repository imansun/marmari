import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FactorViewSettingAttendance' })
export class LegacyFactorViewSettingAttendance {
  @PrimaryColumn({ type: 'bigint', name: 'FactorViewSettingAttendanceID' })
  factorViewSettingAttendanceID: number;

  @Column({ type: 'bigint', name: 'FactorViewSettingRef' })
  factorViewSettingRef: number;

  @Column({ type: 'bigint', name: 'AttendanceFactorRef' })
  attendanceFactorRef: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}