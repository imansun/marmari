import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailZoneInventory' })
export class LegacyRetailZoneInventory {
  @PrimaryColumn({ type: 'bigint', name: 'RetailZoneInventoryID' })
  retailZoneInventoryID: number;

  @Column({ type: 'bigint', name: 'RetailZoneRef' })
  retailZoneRef: number;

  @Column({ type: 'bigint', name: 'StoreRef' })
  storeRef: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}