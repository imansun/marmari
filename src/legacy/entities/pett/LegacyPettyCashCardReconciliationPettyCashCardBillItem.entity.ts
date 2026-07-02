import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PettyCashCardReconciliationPettyCashCardBillItem' })
export class LegacyPettyCashCardReconciliationPettyCashCardBillItem {
  @PrimaryColumn({ type: 'bigint', name: 'PettyCashCardReconciliationPettyCashCardBillItemID' })
  pettyCashCardReconciliationPettyCashCardBillItemID: number;

  @Column({ type: 'bigint', name: 'PettyCashCardReconciliationRef' })
  pettyCashCardReconciliationRef: number;

  @Column({ type: 'integer', name: 'RelationNumber' })
  relationNumber: number;

  @Column({ type: 'bigint', name: 'PettyCashCardBillItemRef', nullable: true })
  pettyCashCardBillItemRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}