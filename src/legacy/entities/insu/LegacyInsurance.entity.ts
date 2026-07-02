import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Insurance' })
export class LegacyInsurance {
  @PrimaryColumn({ type: 'bigint', name: 'InsuranceID' })
  insuranceID: number;

  @Column({ type: 'character varying', name: 'InsuranceNumber' })
  insuranceNumber: string;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'InsuranceTypeRef' })
  insuranceTypeRef: number;

  @Column({ type: 'bigint', name: 'Insurer' })
  insurer: number;

  @Column({ type: 'bigint', name: 'InsuranceCompany' })
  insuranceCompany: number;

  @Column({ type: 'timestamp without time zone', name: 'IssueDate' })
  issueDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'InsuranceStartDate' })
  insuranceStartDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'InsuranceEndDate' })
  insuranceEndDate: Date;

  @Column({ type: 'numeric', name: 'TaxAmount' })
  taxAmount: number;

  @Column({ type: 'numeric', name: 'DutyAmount' })
  dutyAmount: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'Approver', nullable: true })
  approver: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ApproveDate', nullable: true })
  approveDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsDeployment' })
  isDeployment: boolean;

  @Column({ type: 'boolean', name: 'IsBatch', default: false })
  isBatch: boolean;

  @Column({ type: 'numeric', name: 'BatchAmount', nullable: true })
  batchAmount: number | null;

  @Column({ type: 'integer', name: 'BatchAllocationType', nullable: true })
  batchAllocationType: number | null;

  @Column({ type: 'timestamp without time zone', name: 'InsuranceStopDate', nullable: true })
  insuranceStopDate: Date | null;

}