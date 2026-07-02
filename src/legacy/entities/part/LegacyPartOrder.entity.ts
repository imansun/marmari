import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartOrder' })
export class LegacyPartOrder {
  @PrimaryColumn({ type: 'bigint', name: 'PartOrderID' })
  partOrderID: number;

  @Column({ type: 'bigint', name: 'OrderingRetailShopRef' })
  orderingRetailShopRef: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

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

  @Column({ type: 'boolean', name: 'IsDeliverable' })
  isDeliverable: boolean;

  @Column({ type: 'boolean', name: 'IsRecipientCustomer' })
  isRecipientCustomer: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}