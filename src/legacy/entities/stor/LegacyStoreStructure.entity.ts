import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StoreStructure' })
export class LegacyStoreStructure {
  @PrimaryColumn({ type: 'bigint', name: 'StoreStructureID' })
  storeStructureID: number;

  @Column({ type: 'bigint', name: 'StoreRef' })
  storeRef: number;

  @Column({ type: 'boolean', name: 'IsShelfVoucherManadatory' })
  isShelfVoucherManadatory: boolean;

  @Column({ type: 'integer', name: 'ShelfUnitType' })
  shelfUnitType: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsShelfVoucherItemInfoSameWithRelatedInventoryVoucher', default: false })
  isShelfVoucherItemInfoSameWithRelatedInventoryVoucher: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

}