import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InventoryVoucherSerial' })
export class LegacyInventoryVoucherSerial {
  @PrimaryColumn({ type: 'bigint', name: 'InventoryVoucherSerialID' })
  inventoryVoucherSerialID: number;

  @Column({ type: 'bigint', name: 'SerialRef' })
  serialRef: number;

  @Column({ type: 'bigint', name: 'SerialPackageRef', nullable: true })
  serialPackageRef: number | null;

  @Column({ type: 'character varying', name: 'Value' })
  value: string;

  @Column({ type: 'integer', name: 'Index', nullable: true })
  index: number | null;

  @Column({ type: 'bigint', name: 'PartRef', nullable: true })
  partRef: number | null;

  @Column({ type: 'bigint', name: 'StoreRef', nullable: true })
  storeRef: number | null;

  @Column({ type: 'integer', name: 'TypeOfEffectOnStock', nullable: true })
  typeOfEffectOnStock: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}