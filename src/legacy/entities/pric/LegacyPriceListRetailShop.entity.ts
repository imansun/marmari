import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PriceListRetailShop' })
export class LegacyPriceListRetailShop {
  @PrimaryColumn({ type: 'bigint', name: 'PriceListRetailShopID' })
  priceListRetailShopID: number;

  @Column({ type: 'bigint', name: 'PriceListRef' })
  priceListRef: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}