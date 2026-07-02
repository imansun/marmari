import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailRegionShop' })
export class LegacyRetailRegionShop {
  @PrimaryColumn({ type: 'bigint', name: 'RetailRegionShopID' })
  retailRegionShopID: number;

  @Column({ type: 'bigint', name: 'RetailRegionRef' })
  retailRegionRef: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}