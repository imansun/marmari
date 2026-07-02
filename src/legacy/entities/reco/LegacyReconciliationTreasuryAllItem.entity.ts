import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReconciliationTreasuryAllItem' })
export class LegacyReconciliationTreasuryAllItem {
  @PrimaryColumn({ type: 'bigint', name: 'ReconciliationTreasuryAllItemID' })
  reconciliationTreasuryAllItemID: number;

  @Column({ type: 'bigint', name: 'ItemID' })
  itemID: number;

  @Column({ type: 'character varying', name: 'DocumentNumber', nullable: true })
  documentNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'DocumentDate' })
  documentDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'DocumentItemDate' })
  documentItemDate: Date;

  @Column({ type: 'integer', name: 'DocumentType' })
  documentType: number;

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

  @Column({ type: 'bigint', name: 'ReconciliationRef' })
  reconciliationRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'DocumentItemRef', nullable: true })
  documentItemRef: number | null;

  @Column({ type: 'bigint', name: 'ReconciliationReasonRef', nullable: true })
  reconciliationReasonRef: number | null;

}