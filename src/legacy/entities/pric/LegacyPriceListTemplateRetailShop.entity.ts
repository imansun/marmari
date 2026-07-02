import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PriceListTemplateRetailShop' })
export class LegacyPriceListTemplateRetailShop {
  @PrimaryColumn({ type: 'bigint', name: 'PriceListTemplateRetailShopID' })
  priceListTemplateRetailShopID: number;

  @Column({ type: 'bigint', name: 'PriceListTemplateRef' })
  priceListTemplateRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

}