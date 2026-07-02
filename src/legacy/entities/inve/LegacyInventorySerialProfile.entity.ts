import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InventorySerialProfile' })
export class LegacyInventorySerialProfile {
  @PrimaryColumn({ type: 'bigint', name: 'InventorySerialProfileID' })
  inventorySerialProfileID: number;

  @Column({ type: 'bigint', name: 'ProfileRef' })
  profileRef: number;

  @Column({ type: 'integer', name: 'TransactionType' })
  transactionType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}