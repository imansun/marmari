import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InternalTransfer' })
export class LegacyInternalTransfer {
  @PrimaryColumn({ type: 'bigint', name: 'InternalTransferID' })
  internalTransferID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'timestamp without time zone', name: 'DeliveredDate' })
  deliveredDate: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_EN', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'DestinationBranchRef' })
  destinationBranchRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

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

  @Column({ type: 'timestamp without time zone', name: 'ApprovalDate', nullable: true })
  approvalDate: Date | null;

  @Column({ type: 'integer', name: 'Type', default: 1 })
  type: number;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'CollectorRef', nullable: true })
  collectorRef: number | null;

}