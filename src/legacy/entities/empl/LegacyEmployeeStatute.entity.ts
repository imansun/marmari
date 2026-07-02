import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeStatute' })
export class LegacyEmployeeStatute {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeStatuteID' })
  employeeStatuteID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bigint', name: 'EmploymentTypeRef', nullable: true })
  employmentTypeRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'EmploymentDate', nullable: true })
  employmentDate: Date | null;

  @Column({ type: 'bigint', name: 'StatuteTypeRef', nullable: true })
  statuteTypeRef: number | null;

  @Column({ type: 'integer', name: 'AfterIssueStatusCode', nullable: true })
  afterIssueStatusCode: number | null;

  @Column({ type: 'character varying', name: 'Number', nullable: true })
  number: string | null;

  @Column({ type: 'timestamp without time zone', name: 'IssueDate', nullable: true })
  issueDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'ApplyDate', nullable: true })
  applyDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'ExpiryDate', nullable: true })
  expiryDate: Date | null;

  @Column({ type: 'bigint', name: 'OrganizationalStructureRef', nullable: true })
  organizationalStructureRef: number | null;

  @Column({ type: 'bigint', name: 'PostRef', nullable: true })
  postRef: number | null;

  @Column({ type: 'bigint', name: 'DepartmentRef', nullable: true })
  departmentRef: number | null;

  @Column({ type: 'bigint', name: 'JobRef', nullable: true })
  jobRef: number | null;

  @Column({ type: 'integer', name: 'WorkLocationCode', nullable: true })
  workLocationCode: number | null;

  @Column({ type: 'integer', name: 'RankCode', nullable: true })
  rankCode: number | null;

  @Column({ type: 'integer', name: 'BaseCode', nullable: true })
  baseCode: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'timestamp without time zone', name: 'ConfirmDate', nullable: true })
  confirmDate: Date | null;

  @Column({ type: 'integer', name: 'ConfirmYearMonth', nullable: true })
  confirmYearMonth: number | null;

  @Column({ type: 'bigint', name: 'ConfirmerRef', nullable: true })
  confirmerRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'PaymentConfirmDate', nullable: true })
  paymentConfirmDate: Date | null;

  @Column({ type: 'bigint', name: 'PaymentConfirmerRef', nullable: true })
  paymentConfirmerRef: number | null;

  @Column({ type: 'integer', name: 'ApplyYearMonth', nullable: true })
  applyYearMonth: number | null;

  @Column({ type: 'integer', name: 'IssueYearMonth', nullable: true })
  issueYearMonth: number | null;

  @Column({ type: 'bigint', name: 'BatchEmployeeStatuteRef', nullable: true })
  batchEmployeeStatuteRef: number | null;

  @Column({ type: 'bigint', name: 'CorrectiveEmployeeStatuteRef', nullable: true })
  correctiveEmployeeStatuteRef: number | null;

  @Column({ type: 'bigint', name: 'EmployeeStatuteRequestRef', nullable: true })
  employeeStatuteRequestRef: number | null;

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

  @Column({ type: 'integer', name: 'Extra3Code', nullable: true })
  extra3Code: number | null;

  @Column({ type: 'integer', name: 'Extra4Code', nullable: true })
  extra4Code: number | null;

  @Column({ type: 'timestamp without time zone', name: 'RetirementDate', nullable: true })
  retirementDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'OfficialEmploymentDate', nullable: true })
  officialEmploymentDate: Date | null;

  @Column({ type: 'integer', name: 'BonusGroup', nullable: true })
  bonusGroup: number | null;

  @Column({ type: 'integer', name: 'EstablishmentDocument', nullable: true })
  establishmentDocument: number | null;

  @Column({ type: 'integer', name: 'WorkYears', nullable: true })
  workYears: number | null;

  @Column({ type: 'integer', name: 'IssueTimeCode', nullable: true })
  issueTimeCode: number | null;

  @Column({ type: 'numeric', name: 'ApplyConfirmDateSequence' })
  applyConfirmDateSequence: number;

  @Column({ type: 'numeric', name: 'ApplyIssueDateSequence' })
  applyIssueDateSequence: number;

}