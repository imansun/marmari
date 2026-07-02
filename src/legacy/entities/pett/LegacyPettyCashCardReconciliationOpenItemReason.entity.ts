import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PettyCashCardReconciliationOpenItemReason' })
export class LegacyPettyCashCardReconciliationOpenItemReason {
  @PrimaryColumn({ type: 'bigint', name: 'PettyCashCardReconciliationOpenItemReasonID' })
  pettyCashCardReconciliationOpenItemReasonID: number;

  @Column({ type: 'bigint', name: 'PettyCashCardReconciliationRef' })
  pettyCashCardReconciliationRef: number;

  @Column({ type: 'bigint', name: 'PettyCashCardReconciliationReasonRef' })
  pettyCashCardReconciliationReasonRef: number;

  @Column({ type: 'bigint', name: 'PettyCashCardBillItemRef', nullable: true })
  pettyCashCardBillItemRef: number | null;

  @Column({ type: 'bigint', name: 'DocumentItemType', nullable: true })
  documentItemType: number | null;

  @Column({ type: 'bigint', name: 'DocumentItemRef', nullable: true })
  documentItemRef: number | null;

  @Column({ type: 'integer', name: 'PettyCashCardReconciliationReasonItemType' })
  pettyCashCardReconciliationReasonItemType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}