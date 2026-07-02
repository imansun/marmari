import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceFactor' })
export class LegacyAttendanceFactor {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceFactorID' })
  attendanceFactorID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'ScaleCode' })
  scaleCode: number;

  @Column({ type: 'integer', name: 'AssignTypeCode' })
  assignTypeCode: number;

  @Column({ type: 'integer', name: 'MeasurementUnitCode' })
  measurementUnitCode: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

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

  @Column({ type: 'boolean', name: 'EmploymentTypeVisible' })
  employmentTypeVisible: boolean;

  @Column({ type: 'boolean', name: 'WorkingGroupVisible' })
  workingGroupVisible: boolean;

  @Column({ type: 'boolean', name: 'WorkLocationVisible' })
  workLocationVisible: boolean;

  @Column({ type: 'boolean', name: 'BranchVisible' })
  branchVisible: boolean;

}