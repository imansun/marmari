import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceCalcLog' })
export class LegacyAttendanceCalcLog {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceCalcLogID' })
  attendanceCalcLogID: number;

  @Column({ type: 'integer', name: 'AttendanceCalcStatus' })
  attendanceCalcStatus: number;

  @Column({ type: 'bigint', name: 'Requester' })
  requester: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'character varying', name: 'Message' })
  message: string;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

}