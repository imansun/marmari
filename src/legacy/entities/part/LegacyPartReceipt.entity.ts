import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartReceipt' })
export class LegacyPartReceipt {
  @PrimaryColumn({ type: 'bigint', name: 'PartReceiptID' })
  partReceiptID: number;

  @Column({ type: 'bigint', name: 'ReceivingRetailShopRef' })
  receivingRetailShopRef: number;

  @Column({ type: 'uuid', name: 'ReferenceUniqueID' })
  referenceUniqueID: string;

  @Column({ type: 'bigint', name: 'InventoryRef' })
  inventoryRef: number;

  @Column({ type: 'bigint', name: 'CustomerPartyRef', nullable: true })
  customerPartyRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}