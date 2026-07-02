import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceCalc' })
export class LegacyAttendanceCalc {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceCalcID' })
  attendanceCalcID: number;

  @Column({ type: 'integer', name: 'IssueYearMonth' })
  issueYearMonth: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'timestamp without time zone', name: 'FromDate' })
  fromDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ToDate' })
  toDate: Date;

  @Column({ type: 'bigint', name: 'AttendanceCalculationCalendarRef', nullable: true })
  attendanceCalculationCalendarRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'smallint', name: 'CalcType', default: 0 })
  calcType: number;

  @Column({ type: 'timestamp without time zone', name: 'LastAttendanceDateTime', nullable: true })
  lastAttendanceDateTime: Date | null;

  @Column({ type: 'boolean', name: 'LastAttendanceEntrance', nullable: true })
  lastAttendanceEntrance: boolean | null;

  @Column({ type: 'bigint', name: 'LastAttendanceRef', nullable: true })
  lastAttendanceRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'EndDateTime', nullable: true })
  endDateTime: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'FirstincompleteDate', nullable: true })
  firstincompleteDate: Date | null;

}