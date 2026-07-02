import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldExcludedPriceList' })
export class LegacyHandheldExcludedPriceList {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldExcludedPriceListID' })
  handheldExcludedPriceListID: number;

  @Column({ type: 'bigint', name: 'PriceListRef' })
  priceListRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}