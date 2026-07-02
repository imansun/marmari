import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DraftPriceListItemUsed' })
export class LegacyDraftPriceListItemUsed {
  @PrimaryColumn({ type: 'bigint', name: 'DraftPriceListItemUsedID' })
  draftPriceListItemUsedID: number;

  @Column({ type: 'bigint', name: 'DraftPriceListItemRef' })
  draftPriceListItemRef: number;

  @Column({ type: 'bigint', name: 'PriceListItemRef' })
  priceListItemRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}