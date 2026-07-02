import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InvoicePermit' })
export class LegacyInvoicePermit {
  @PrimaryColumn({ type: 'bigint', name: 'InvoicePermitID' })
  invoicePermitID: number;

  @Column({ type: 'bigint', name: 'OrderingRetailShopRef' })
  orderingRetailShopRef: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'uuid', name: 'ReferenceUniqueID' })
  referenceUniqueID: string;

  @Column({ type: 'bigint', name: 'InventoryRef' })
  inventoryRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}