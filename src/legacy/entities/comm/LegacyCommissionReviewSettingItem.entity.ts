import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CommissionReviewSettingItem' })
export class LegacyCommissionReviewSettingItem {
  @PrimaryColumn({ type: 'bigint', name: 'CommissionReviewSettingItemID' })
  commissionReviewSettingItemID: number;

  @Column({ type: 'bigint', name: 'CommissionReviewSettingRef' })
  commissionReviewSettingRef: number;

  @Column({ type: 'bigint', name: 'CommissionFactorRef' })
  commissionFactorRef: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}