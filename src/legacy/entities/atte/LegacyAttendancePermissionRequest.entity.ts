import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendancePermissionRequest' })
export class LegacyAttendancePermissionRequest {
  @PrimaryColumn({ type: 'bigint', name: 'AttendancePermissionRequestID' })
  attendancePermissionRequestID: number;

  @Column({ type: 'bigint', name: 'AttendancePermissionRequestStructureRef' })
  attendancePermissionRequestStructureRef: number;

  @Column({ type: 'timestamp without time zone', name: 'BaseDate' })
  baseDate: Date;

  @Column({ type: 'boolean', name: 'FixedFactorAware' })
  fixedFactorAware: boolean;

  @Column({ type: 'boolean', name: 'MonthlyAware' })
  monthlyAware: boolean;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'timestamp without time zone', name: 'IssueDate' })
  issueDate: Date;

  @Column({ type: 'numeric', name: 'Value' })
  value: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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

  @Column({ type: 'timestamp without time zone', name: 'ToDate', nullable: true })
  toDate: Date | null;

}