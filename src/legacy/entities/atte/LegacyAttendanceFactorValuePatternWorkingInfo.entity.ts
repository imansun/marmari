import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceFactorValuePatternWorkingInfo' })
export class LegacyAttendanceFactorValuePatternWorkingInfo {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceFactorValuePatternWorkingInfoID' })
  attendanceFactorValuePatternWorkingInfoID: number;

  @Column({ type: 'bigint', name: 'AttendanceFactorValuePatternRef' })
  attendanceFactorValuePatternRef: number;

  @Column({ type: 'integer', name: 'WorkingInfoCode' })
  workingInfoCode: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}