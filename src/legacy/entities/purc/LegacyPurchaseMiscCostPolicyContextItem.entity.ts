import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PurchaseMiscCostPolicyContextItem' })
export class LegacyPurchaseMiscCostPolicyContextItem {
  @PrimaryColumn({ type: 'bigint', name: 'PurchaseMiscCostPolicyContextItemID' })
  purchaseMiscCostPolicyContextItemID: number;

  @Column({ type: 'bigint', name: 'PurchaseMiscCostRef' })
  purchaseMiscCostRef: number;

  @Column({ type: 'integer', name: 'ItemType' })
  itemType: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef', nullable: true })
  businessPolicyRef: number | null;

  @Column({ type: 'bigint', name: 'ItemRef', nullable: true })
  itemRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}