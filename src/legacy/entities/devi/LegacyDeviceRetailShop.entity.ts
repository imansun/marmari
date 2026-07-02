import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DeviceRetailShop' })
export class LegacyDeviceRetailShop {
  @PrimaryColumn({ type: 'bigint', name: 'DeviceRetailShopID' })
  deviceRetailShopID: number;

  @Column({ type: 'bigint', name: 'DeviceRef' })
  deviceRef: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}