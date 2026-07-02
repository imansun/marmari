import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InsuranceEndorsement' })
export class LegacyInsuranceEndorsement {
  @PrimaryColumn({ type: 'bigint', name: 'InsuranceEndorsementID' })
  insuranceEndorsementID: number;

  @Column({ type: 'character varying', name: 'InsuranceEndorsementNumber' })
  insuranceEndorsementNumber: string;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'InsuranceRef' })
  insuranceRef: number;

  @Column({ type: 'integer', name: 'InsuranceEndorsementType' })
  insuranceEndorsementType: number;

  @Column({ type: 'timestamp without time zone', name: 'InsuranceEndDate', nullable: true })
  insuranceEndDate: Date | null;

  @Column({ type: 'numeric', name: 'EndorsementAmount' })
  endorsementAmount: number;

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

}