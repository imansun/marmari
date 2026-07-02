import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PairedAttendanceData' })
export class LegacyPairedAttendanceData {
  @PrimaryColumn({ type: 'bigint', name: 'PairedAttendanceDataID' })
  pairedAttendanceDataID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'timestamp without time zone', name: 'PairedAttendanceDate' })
  pairedAttendanceDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'StartDateTime', nullable: true })
  startDateTime: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndDateTime', nullable: true })
  endDateTime: Date | null;

  @Column({ type: 'bigint', name: 'AttendanceStatusRef', nullable: true })
  attendanceStatusRef: number | null;

  @Column({ type: 'bigint', name: 'RowNumber', nullable: true })
  rowNumber: number | null;

  @Column({ type: 'bigint', name: 'StartAttendanceDataID', nullable: true })
  startAttendanceDataID: number | null;

  @Column({ type: 'bigint', name: 'EndAttendanceDataID', nullable: true })
  endAttendanceDataID: number | null;

  @Column({ type: 'integer', name: 'ShiftStartTime', nullable: true })
  shiftStartTime: number | null;

  @Column({ type: 'integer', name: 'ShiftEndTime', nullable: true })
  shiftEndTime: number | null;

  @Column({ type: 'character varying', name: 'ErrorMessage', nullable: true })
  errorMessage: string | null;

  @Column({ type: 'bigint', name: 'WorkingGroupRef', nullable: true })
  workingGroupRef: number | null;

  @Column({ type: 'bigint', name: 'WorkingShiftRef', nullable: true })
  workingShiftRef: number | null;

  @Column({ type: 'bigint', name: 'WorkingCalendarRef', nullable: true })
  workingCalendarRef: number | null;

  @Column({ type: 'bigint', name: 'SpecialDayRef', nullable: true })
  specialDayRef: number | null;

  @Column({ type: 'boolean', name: 'IsHoliday', nullable: true })
  isHoliday: boolean | null;

  @Column({ type: 'bigint', name: 'LeaveRequestRef', nullable: true })
  leaveRequestRef: number | null;

  @Column({ type: 'bigint', name: 'MissionDocumentRef', nullable: true })
  missionDocumentRef: number | null;

  @Column({ type: 'integer', name: 'StartGateCode', nullable: true })
  startGateCode: number | null;

  @Column({ type: 'integer', name: 'EndGateCode', nullable: true })
  endGateCode: number | null;

  @Column({ type: 'integer', name: 'StartSiteCode', nullable: true })
  startSiteCode: number | null;

  @Column({ type: 'integer', name: 'EndSiteCode', nullable: true })
  endSiteCode: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

}