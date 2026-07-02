import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InventoryIntegrationItem' })
export class LegacyInventoryIntegrationItem {
  @PrimaryColumn({ type: 'bigint', name: 'InventoryIntegrationItemID' })
  inventoryIntegrationItemID: number;

  @Column({ type: 'bigint', name: 'InventoryIntegrationRef' })
  inventoryIntegrationRef: number;

  @Column({ type: 'bigint', name: 'DocumentItemRef' })
  documentItemRef: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherItemRef' })
  inventoryVoucherItemRef: number;

  @Column({ type: 'integer', name: 'DocumentType' })
  documentType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}