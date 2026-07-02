import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherReconciliationOpenItemReason' })
export class LegacyVoucherReconciliationOpenItemReason {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherReconciliationOpenItemReasonID' })
  voucherReconciliationOpenItemReasonID: number;

  @Column({ type: 'bigint', name: 'VoucherReconciliationRef' })
  voucherReconciliationRef: number;

  @Column({ type: 'bigint', name: 'ReconciliationReasonRef' })
  reconciliationReasonRef: number;

  @Column({ type: 'bigint', name: 'ItemRef' })
  itemRef: number;

  @Column({ type: 'integer', name: 'ReconciliationReasonItemType' })
  reconciliationReasonItemType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}