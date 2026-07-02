import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceFactorValuePatternEmployee' })
export class LegacyAttendanceFactorValuePatternEmployee {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceFactorValuePatternEmployeeID' })
  attendanceFactorValuePatternEmployeeID: number;

  @Column({ type: 'bigint', name: 'AttendanceFactorValuePatternRef' })
  attendanceFactorValuePatternRef: number;

  @Column({ type: 'integer', name: 'EmployeeInfoCode' })
  employeeInfoCode: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}