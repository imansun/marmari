import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReconciliationOpenItemReason' })
export class LegacyReconciliationOpenItemReason {
  @PrimaryColumn({ type: 'bigint', name: 'ReconciliationOpenItemReasonID' })
  reconciliationOpenItemReasonID: number;

  @Column({ type: 'bigint', name: 'ReconciliationRef' })
  reconciliationRef: number;

  @Column({ type: 'bigint', name: 'ReconciliationReasonRef' })
  reconciliationReasonRef: number;

  @Column({ type: 'bigint', name: 'ItemRef' })
  itemRef: number;

  @Column({ type: 'integer', name: 'ReconciliationReasonItemType' })
  reconciliationReasonItemType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}