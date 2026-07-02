import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeEducationChangeRequest' })
export class LegacyEmployeeEducationChangeRequest {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeEducationChangeRequestID' })
  employeeEducationChangeRequestID: number;

  @Column({ type: 'integer', name: 'DegreeCode' })
  degreeCode: number;

  @Column({ type: 'integer', name: 'DisciplineCode' })
  disciplineCode: number;

  @Column({ type: 'integer', name: 'MajorCode', nullable: true })
  majorCode: number | null;

  @Column({ type: 'timestamp without time zone', name: 'StartDate', nullable: true })
  startDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'character varying', name: 'GPA', nullable: true })
  gPA: string | null;

  @Column({ type: 'integer', name: 'CenterCode' })
  centerCode: number;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate' })
  effectiveDate: Date;

  @Column({ type: 'bytea', name: 'FileContents', nullable: true })
  fileContents: Buffer | null;

  @Column({ type: 'character varying', name: 'FileName', nullable: true })
  fileName: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'EmployeeEducationRef' })
  employeeEducationRef: number;

  @Column({ type: 'bigint', name: 'EmployeeInfoChangeRequestRef' })
  employeeInfoChangeRequestRef: number;

  @Column({ type: 'integer', name: 'ActionType' })
  actionType: number;

}