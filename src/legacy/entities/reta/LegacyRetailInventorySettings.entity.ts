import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailInventorySettings' })
export class LegacyRetailInventorySettings {
  @PrimaryColumn({ type: 'bigint', name: 'RetailInventorySettingsID' })
  retailInventorySettingsID: number;

  @Column({ type: 'bigint', name: 'StoreRef' })
  storeRef: number;

  @Column({ type: 'integer', name: 'SalesStockControlType' })
  salesStockControlType: number;

  @Column({ type: 'boolean', name: 'AllowNegativeReserve' })
  allowNegativeReserve: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}