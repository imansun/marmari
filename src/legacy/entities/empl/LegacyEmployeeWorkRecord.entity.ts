import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeWorkRecord' })
export class LegacyEmployeeWorkRecord {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeWorkRecordID' })
  employeeWorkRecordID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'integer', name: 'WorkTypeCode' })
  workTypeCode: number;

  @Column({ type: 'character varying', name: 'OrgName' })
  orgName: string;

  @Column({ type: 'character varying', name: 'Role', nullable: true })
  role: string | null;

  @Column({ type: 'bigint', name: 'PostRef', nullable: true })
  postRef: number | null;

  @Column({ type: 'bigint', name: 'JobRef', nullable: true })
  jobRef: number | null;

  @Column({ type: 'integer', name: 'WorkRelationTypeCode' })
  workRelationTypeCode: number;

  @Column({ type: 'integer', name: 'EducationDegreeCode' })
  educationDegreeCode: number;

  @Column({ type: 'timestamp without time zone', name: 'StartDate', nullable: true })
  startDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'integer', name: 'Duration', nullable: true })
  duration: number | null;

  @Column({ type: 'integer', name: 'ResignationReasonCode', nullable: true })
  resignationReasonCode: number | null;

  @Column({ type: 'integer', name: 'InsuranceDuration', nullable: true })
  insuranceDuration: number | null;

  @Column({ type: 'bigint', name: 'OrganizationRef', nullable: true })
  organizationRef: number | null;

  @Column({ type: 'numeric', name: 'Score', nullable: true })
  score: number | null;

  @Column({ type: 'integer', name: 'Extra1Code', nullable: true })
  extra1Code: number | null;

  @Column({ type: 'integer', name: 'Extra2Code', nullable: true })
  extra2Code: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

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

  @Column({ type: 'bigint', name: 'EmploymentTypeRef', nullable: true })
  employmentTypeRef: number | null;

  @Column({ type: 'bigint', name: 'DepartmentRef', nullable: true })
  departmentRef: number | null;

  @Column({ type: 'bigint', name: 'JobRankRef', nullable: true })
  jobRankRef: number | null;

  @Column({ type: 'integer', name: 'WorkLocationCode', nullable: true })
  workLocationCode: number | null;

  @Column({ type: 'integer', name: 'RankCode', nullable: true })
  rankCode: number | null;

  @Column({ type: 'integer', name: 'BaseCode', nullable: true })
  baseCode: number | null;

  @Column({ type: 'character varying', name: 'StatuteNumber', nullable: true })
  statuteNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'StatuteApplyDate', nullable: true })
  statuteApplyDate: Date | null;

  @Column({ type: 'integer', name: 'Extra3Code', nullable: true })
  extra3Code: number | null;

  @Column({ type: 'integer', name: 'Extra4Code', nullable: true })
  extra4Code: number | null;

}