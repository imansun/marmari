import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductFeedCompositionItem' })
export class LegacyProductFeedCompositionItem {
  @PrimaryColumn({ type: 'bigint', name: 'ProductFeedCompositionItemID' })
  productFeedCompositionItemID: number;

  @Column({ type: 'bigint', name: 'ProductFeedCompositionRef' })
  productFeedCompositionRef: number;

  @Column({ type: 'bigint', name: 'ProductFeedRef' })
  productFeedRef: number;

  @Column({ type: 'numeric', name: 'StandardQuantity' })
  standardQuantity: number;

  @Column({ type: 'numeric', name: 'StandardPercentage' })
  standardPercentage: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}