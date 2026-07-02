import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeTrainingChangeRequest' })
export class LegacyEmployeeTrainingChangeRequest {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeTrainingChangeRequestID' })
  employeeTrainingChangeRequestID: number;

  @Column({ type: 'character varying', name: 'CourseTitle', nullable: true })
  courseTitle: string | null;

  @Column({ type: 'timestamp without time zone', name: 'StartDate', nullable: true })
  startDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'integer', name: 'Duration' })
  duration: number;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate' })
  effectiveDate: Date;

  @Column({ type: 'boolean', name: 'HasCertification' })
  hasCertification: boolean;

  @Column({ type: 'boolean', name: 'Internal', nullable: true })
  internal: boolean | null;

  @Column({ type: 'bytea', name: 'FileContents', nullable: true })
  fileContents: Buffer | null;

  @Column({ type: 'character varying', name: 'FileName', nullable: true })
  fileName: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'EmployeeTrainingRef' })
  employeeTrainingRef: number;

  @Column({ type: 'bigint', name: 'EmployeeInfoChangeRequestRef' })
  employeeInfoChangeRequestRef: number;

  @Column({ type: 'integer', name: 'ActionType' })
  actionType: number;

}