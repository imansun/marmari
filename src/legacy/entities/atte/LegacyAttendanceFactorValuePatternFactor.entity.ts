import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceFactorValuePatternFactor' })
export class LegacyAttendanceFactorValuePatternFactor {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceFactorValuePatternFactorID' })
  attendanceFactorValuePatternFactorID: number;

  @Column({ type: 'bigint', name: 'AttendanceFactorValuePatternRef' })
  attendanceFactorValuePatternRef: number;

  @Column({ type: 'bigint', name: 'AttendanceFactorRef' })
  attendanceFactorRef: number;

  @Column({ type: 'integer', name: 'ConditionCode', nullable: true })
  conditionCode: number | null;

  @Column({ type: 'numeric', name: 'FirstConditionValue', nullable: true })
  firstConditionValue: number | null;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'SecondConditionValue', nullable: true })
  secondConditionValue: number | null;

}