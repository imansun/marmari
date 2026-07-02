import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PettyCashCardReconciliationTreasuryAllItem' })
export class LegacyPettyCashCardReconciliationTreasuryAllItem {
  @PrimaryColumn({ type: 'bigint', name: 'PettyCashCardReconciliationTreasuryAllItemID' })
  pettyCashCardReconciliationTreasuryAllItemID: number;

  @Column({ type: 'character varying', name: 'DocumentItemNumber', nullable: true })
  documentItemNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'DocumentDate' })
  documentDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'DocumentItemDate' })
  documentItemDate: Date;

  @Column({ type: 'integer', name: 'DocumentItemType' })
  documentItemType: number;

  @Column({ type: 'numeric', name: 'Debit' })
  debit: number;

  @Column({ type: 'numeric', name: 'Credit' })
  credit: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bigint', name: 'PettyCashCardRef' })
  pettyCashCardRef: number;

  @Column({ type: 'integer', name: 'RelationNumber' })
  relationNumber: number;

  @Column({ type: 'bigint', name: 'PettyCashCardReconciliationRef' })
  pettyCashCardReconciliationRef: number;

  @Column({ type: 'bigint', name: 'DocumentItemRef', nullable: true })
  documentItemRef: number | null;

  @Column({ type: 'bigint', name: 'PettyCashCardReconciliationReasonRef', nullable: true })
  pettyCashCardReconciliationReasonRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}