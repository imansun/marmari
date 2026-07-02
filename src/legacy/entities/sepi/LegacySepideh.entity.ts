import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'sepideh' })
export class LegacySepideh {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeStatuteID' })
  employeeStatuteID: number;

  @PrimaryColumn({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'EmploymentTypeRef' })
  employmentTypeRef: number | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'EmploymentDate' })
  employmentDate: Date | null;

  @PrimaryColumn({ type: 'bigint', name: 'StatuteTypeRef' })
  statuteTypeRef: number | null;

  @PrimaryColumn({ type: 'integer', name: 'AfterIssueStatusCode' })
  afterIssueStatusCode: number | null;

  @PrimaryColumn({ type: 'character varying', name: 'Number' })
  number: string | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'IssueDate' })
  issueDate: Date | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'ApplyDate' })
  applyDate: Date | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'ExpiryDate' })
  expiryDate: Date | null;

  @PrimaryColumn({ type: 'bigint', name: 'OrganizationalStructureRef' })
  organizationalStructureRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'PostRef' })
  postRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'DepartmentRef' })
  departmentRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'JobRef' })
  jobRef: number | null;

  @PrimaryColumn({ type: 'integer', name: 'WorkLocationCode' })
  workLocationCode: number | null;

  @PrimaryColumn({ type: 'integer', name: 'RankCode' })
  rankCode: number | null;

  @PrimaryColumn({ type: 'integer', name: 'BaseCode' })
  baseCode: number | null;

  @PrimaryColumn({ type: 'character varying', name: 'Description' })
  description: string | null;

  @PrimaryColumn({ type: 'integer', name: 'Status' })
  status: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'ConfirmDate' })
  confirmDate: Date | null;

  @PrimaryColumn({ type: 'integer', name: 'ConfirmYearMonth' })
  confirmYearMonth: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'ConfirmerRef' })
  confirmerRef: number | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'PaymentConfirmDate' })
  paymentConfirmDate: Date | null;

  @PrimaryColumn({ type: 'bigint', name: 'PaymentConfirmerRef' })
  paymentConfirmerRef: number | null;

  @PrimaryColumn({ type: 'integer', name: 'ApplyYearMonth' })
  applyYearMonth: number | null;

  @PrimaryColumn({ type: 'integer', name: 'IssueYearMonth' })
  issueYearMonth: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'BatchEmployeeStatuteRef' })
  batchEmployeeStatuteRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'CorrectiveEmployeeStatuteRef' })
  correctiveEmployeeStatuteRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'EmployeeStatuteRequestRef' })
  employeeStatuteRequestRef: number | null;

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

  @PrimaryColumn({ type: 'numeric', name: 'ApplyConfirmDateSequence' })
  applyConfirmDateSequence: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'ApplyIssueDateSequence' })
  applyIssueDateSequence: number | null;

}