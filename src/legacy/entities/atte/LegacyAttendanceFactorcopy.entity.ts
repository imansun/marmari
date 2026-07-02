import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceFactorcopy' })
export class LegacyAttendanceFactorcopy {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceFactorID' })
  attendanceFactorID: number;

  @PrimaryColumn({ type: 'character varying', name: 'Name' })
  name: string;

  @PrimaryColumn({ type: 'character varying', name: 'Title' })
  title: string;

  @PrimaryColumn({ type: 'integer', name: 'ScaleCode' })
  scaleCode: number;

  @PrimaryColumn({ type: 'integer', name: 'AssignTypeCode' })
  assignTypeCode: number;

  @PrimaryColumn({ type: 'integer', name: 'MeasurementUnitCode' })
  measurementUnitCode: number;

  @PrimaryColumn({ type: 'character varying', name: 'Description' })
  description: string | null;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'Creator' })
  creator: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @PrimaryColumn({ type: 'boolean', name: 'EmploymentTypeVisible' })
  employmentTypeVisible: boolean;

  @PrimaryColumn({ type: 'boolean', name: 'WorkingGroupVisible' })
  workingGroupVisible: boolean;

  @PrimaryColumn({ type: 'boolean', name: 'WorkLocationVisible' })
  workLocationVisible: boolean;

  @PrimaryColumn({ type: 'boolean', name: 'BranchVisible' })
  branchVisible: boolean;

}