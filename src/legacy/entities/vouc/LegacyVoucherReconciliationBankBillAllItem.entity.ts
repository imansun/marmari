import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherReconciliationBankBillAllItem' })
export class LegacyVoucherReconciliationBankBillAllItem {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherReconciliationBankBillAllItemID' })
  voucherReconciliationBankBillAllItemID: number;

  @Column({ type: 'bigint', name: 'ItemID' })
  itemID: number;

  @Column({ type: 'character varying', name: 'DocumentNumber' })
  documentNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'DocumentDate' })
  documentDate: Date;

  @Column({ type: 'character varying', name: 'Depositor', nullable: true })
  depositor: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'numeric', name: 'Debit', nullable: true })
  debit: number | null;

  @Column({ type: 'numeric', name: 'Credit', nullable: true })
  credit: number | null;

  @Column({ type: 'bigint', name: 'BankAccountRef' })
  bankAccountRef: number;

  @Column({ type: 'boolean', name: 'IsDeployment' })
  isDeployment: boolean;

  @Column({ type: 'integer', name: 'RelationNumber' })
  relationNumber: number;

  @Column({ type: 'boolean', name: 'IsAutomatic' })
  isAutomatic: boolean;

  @Column({ type: 'bigint', name: 'VoucherReconciliationRef' })
  voucherReconciliationRef: number;

  @Column({ type: 'bigint', name: 'ReconciliationReasonRef', nullable: true })
  reconciliationReasonRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}