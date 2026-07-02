import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InventoryTransactionSerialRange' })
export class LegacyInventoryTransactionSerialRange {
  @PrimaryColumn({ type: 'bigint', name: 'InventoryTransactionSerialRangeID' })
  inventoryTransactionSerialRangeID: number;

  @Column({ type: 'bigint', name: 'SerialPackageRef', nullable: true })
  serialPackageRef: number | null;

  @Column({ type: 'bigint', name: 'EntityID' })
  entityID: number;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'bigint', name: 'StartSerialIndex' })
  startSerialIndex: number;

  @Column({ type: 'bigint', name: 'EndSerialIndex' })
  endSerialIndex: number;

  @Column({ type: 'bigint', name: 'StartSerialRef' })
  startSerialRef: number;

  @Column({ type: 'bigint', name: 'EndSerialRef' })
  endSerialRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}