import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeEducation' })
export class LegacyEmployeeEducation {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeEducationID' })
  employeeEducationID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

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

  @Column({ type: 'integer', name: 'NeedLevelCode' })
  needLevelCode: number;

  @Column({ type: 'integer', name: 'QualityCode' })
  qualityCode: number;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate' })
  effectiveDate: Date;

  @Column({ type: 'character varying', name: 'FileName', nullable: true })
  fileName: string | null;

  @Column({ type: 'bytea', name: 'FileContents', nullable: true })
  fileContents: Buffer | null;

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

  @Column({ type: 'integer', name: 'Extra1Code', nullable: true })
  extra1Code: number | null;

  @Column({ type: 'integer', name: 'Extra2Code', nullable: true })
  extra2Code: number | null;

}