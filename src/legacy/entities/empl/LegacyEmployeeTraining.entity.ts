import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeTraining' })
export class LegacyEmployeeTraining {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeTrainingID' })
  employeeTrainingID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'character varying', name: 'CourseTitle', nullable: true })
  courseTitle: string | null;

  @Column({ type: 'timestamp without time zone', name: 'StartDate', nullable: true })
  startDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'integer', name: 'Duration' })
  duration: number;

  @Column({ type: 'integer', name: 'CourseLocationCode', nullable: true })
  courseLocationCode: number | null;

  @Column({ type: 'integer', name: 'CourseSubjectCode' })
  courseSubjectCode: number;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate' })
  effectiveDate: Date;

  @Column({ type: 'integer', name: 'TrainingRelationTypeCode' })
  trainingRelationTypeCode: number;

  @Column({ type: 'numeric', name: 'Score', nullable: true })
  score: number | null;

  @Column({ type: 'boolean', name: 'HasCertification' })
  hasCertification: boolean;

  @Column({ type: 'boolean', name: 'Internal', nullable: true })
  internal: boolean | null;

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