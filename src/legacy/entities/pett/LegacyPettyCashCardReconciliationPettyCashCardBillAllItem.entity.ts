import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PettyCashCardReconciliationPettyCashCardBillAllItem' })
export class LegacyPettyCashCardReconciliationPettyCashCardBillAllItem {
  @PrimaryColumn({ type: 'bigint', name: 'PettyCashCardReconciliationPettyCashCardBillAllItemID' })
  pettyCashCardReconciliationPettyCashCardBillAllItemID: number;

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

  @Column({ type: 'numeric', name: 'Debit' })
  debit: number;

  @Column({ type: 'numeric', name: 'Credit' })
  credit: number;

  @Column({ type: 'bigint', name: 'PettyCashCardRef' })
  pettyCashCardRef: number;

  @Column({ type: 'integer', name: 'RelationNumber' })
  relationNumber: number;

  @Column({ type: 'bigint', name: 'PettyCashCardReconciliationRef' })
  pettyCashCardReconciliationRef: number;

  @Column({ type: 'bigint', name: 'PettyCashCardReconciliationReasonRef', nullable: true })
  pettyCashCardReconciliationReasonRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}