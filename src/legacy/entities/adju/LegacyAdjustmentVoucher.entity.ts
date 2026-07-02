import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AdjustmentVoucher' })
export class LegacyAdjustmentVoucher {
  @PrimaryColumn({ type: 'bigint', name: 'AdjustmentVoucherID' })
  adjustmentVoucherID: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'AuxiliaryNumber', nullable: true })
  auxiliaryNumber: string | null;

  @Column({ type: 'bigint', name: 'ReportingPeriodRef' })
  reportingPeriodRef: number;

  @Column({ type: 'bigint', name: 'VoucherTypeRef' })
  voucherTypeRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'boolean', name: 'IsCurrencyBased' })
  isCurrencyBased: boolean;

  @Column({ type: 'bigint', name: 'ReferenceNumber', nullable: true })
  referenceNumber: number | null;

  @Column({ type: 'boolean', name: 'ShowCurrencyFields' })
  showCurrencyFields: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'integer', name: 'StatementsOperationType' })
  statementsOperationType: number;

}