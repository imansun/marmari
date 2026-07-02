import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InventoryIntegration' })
export class LegacyInventoryIntegration {
  @PrimaryColumn({ type: 'bigint', name: 'InventoryIntegrationID' })
  inventoryIntegrationID: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherRef' })
  inventoryVoucherRef: number;

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