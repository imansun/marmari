import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesOfficeInventory' })
export class LegacySalesOfficeInventory {
  @PrimaryColumn({ type: 'bigint', name: 'SalesOfficeInventoryID' })
  salesOfficeInventoryID: number;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'bigint', name: 'InventoryRef' })
  inventoryRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}