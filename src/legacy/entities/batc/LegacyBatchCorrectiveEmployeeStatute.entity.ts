import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BatchCorrectiveEmployeeStatute' })
export class LegacyBatchCorrectiveEmployeeStatute {
  @PrimaryColumn({ type: 'bigint', name: 'BatchCorrectiveEmployeeStatuteID' })
  batchCorrectiveEmployeeStatuteID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'EmploymentTypeRef', nullable: true })
  employmentTypeRef: number | null;

  @Column({ type: 'bigint', name: 'StatuteTypeRef', nullable: true })
  statuteTypeRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'IssueDate' })
  issueDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ApplyDate' })
  applyDate: Date;

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

  @Column({ type: 'timestamp without time zone', name: 'ConfirmDate', nullable: true })
  confirmDate: Date | null;

  @Column({ type: 'bigint', name: 'ConfirmerRef', nullable: true })
  confirmerRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'PaymentConfirmDate', nullable: true })
  paymentConfirmDate: Date | null;

  @Column({ type: 'bigint', name: 'PaymentConfirmerRef', nullable: true })
  paymentConfirmerRef: number | null;

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

}