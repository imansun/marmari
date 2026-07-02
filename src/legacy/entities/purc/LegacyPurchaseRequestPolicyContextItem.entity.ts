import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PurchaseRequestPolicyContextItem' })
export class LegacyPurchaseRequestPolicyContextItem {
  @PrimaryColumn({ type: 'bigint', name: 'PurchaseRequestPolicyContextItemID' })
  purchaseRequestPolicyContextItemID: number;

  @Column({ type: 'bigint', name: 'PurchaseRequestRef' })
  purchaseRequestRef: number;

  @Column({ type: 'integer', name: 'ItemType' })
  itemType: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef', nullable: true })
  businessPolicyRef: number | null;

  @Column({ type: 'bigint', name: 'ItemRef', nullable: true })
  itemRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}