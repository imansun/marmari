import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PettyCashCardReconciliationTreasuryItem' })
export class LegacyPettyCashCardReconciliationTreasuryItem {
  @PrimaryColumn({ type: 'bigint', name: 'PettyCashCardReconciliationTreasuryItemID' })
  pettyCashCardReconciliationTreasuryItemID: number;

  @Column({ type: 'bigint', name: 'PettyCashCardReconciliationRef' })
  pettyCashCardReconciliationRef: number;

  @Column({ type: 'integer', name: 'RelationNumber' })
  relationNumber: number;

  @Column({ type: 'integer', name: 'DocumentItemType', nullable: true })
  documentItemType: number | null;

  @Column({ type: 'bigint', name: 'DocumentItemRef', nullable: true })
  documentItemRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}