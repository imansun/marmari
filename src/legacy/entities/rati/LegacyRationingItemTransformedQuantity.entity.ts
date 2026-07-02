import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RationingItemTransformedQuantity' })
export class LegacyRationingItemTransformedQuantity {
  @PrimaryColumn({ type: 'bigint', name: 'RationingItemTransformedQuantityID' })
  rationingItemTransformedQuantityID: number;

  @Column({ type: 'bigint', name: 'EntityRelationRef' })
  entityRelationRef: number;

  @Column({ type: 'bigint', name: 'RationingItemRef' })
  rationingItemRef: number;

  @Column({ type: 'timestamp without time zone', name: 'UsageDate' })
  usageDate: Date;

  @Column({ type: 'integer', name: 'TargetItemType' })
  targetItemType: number;

  @Column({ type: 'bigint', name: 'TargetItemRef' })
  targetItemRef: number;

  @Column({ type: 'integer', name: 'TargetItemPolicyResultType' })
  targetItemPolicyResultType: number;

  @Column({ type: 'bigint', name: 'TargetItemPolicyResultRef' })
  targetItemPolicyResultRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}