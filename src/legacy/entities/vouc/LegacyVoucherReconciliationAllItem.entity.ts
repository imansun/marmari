import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherReconciliationAllItem' })
export class LegacyVoucherReconciliationAllItem {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherReconciliationAllItemID' })
  voucherReconciliationAllItemID: number;

  @Column({ type: 'bigint', name: 'ItemID' })
  itemID: number;

  @Column({ type: 'character varying', name: 'VoucherNumber', nullable: true })
  voucherNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'VoucherDate' })
  voucherDate: Date;

  @Column({ type: 'character varying', name: 'FollowUpNumber', nullable: true })
  followUpNumber: string | null;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'numeric', name: 'Debit', nullable: true })
  debit: number | null;

  @Column({ type: 'numeric', name: 'Credit', nullable: true })
  credit: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

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

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'VoucherItemRef', nullable: true })
  voucherItemRef: number | null;

  @Column({ type: 'bigint', name: 'ReconciliationReasonRef', nullable: true })
  reconciliationReasonRef: number | null;

  @Column({ type: 'character varying', name: 'SequenceNumber', nullable: true })
  sequenceNumber: string | null;

}