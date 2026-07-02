import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceFactorPropertycopy' })
export class LegacyAttendanceFactorPropertycopy {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceFactorPropertyID' })
  attendanceFactorPropertyID: number;

  @PrimaryColumn({ type: 'bigint', name: 'AttendanceFactorRef' })
  attendanceFactorRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'EmploymentTypeRef' })
  employmentTypeRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'WorkingGroupRef' })
  workingGroupRef: number | null;

  @PrimaryColumn({ type: 'integer', name: 'WorkLocationCode' })
  workLocationCode: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'BranchRef' })
  branchRef: number | null;

  @PrimaryColumn({ type: 'integer', name: 'ApplyYearMonth' })
  applyYearMonth: number;

  @PrimaryColumn({ type: 'integer', name: 'Status' })
  status: number;

  @PrimaryColumn({ type: 'bigint', name: 'FormulaRef' })
  formulaRef: number | null;

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

}