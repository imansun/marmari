import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PackingListItemDetail' })
export class LegacyPackingListItemDetail {
  @PrimaryColumn({ type: 'bigint', name: 'PackingListItemDetailID' })
  packingListItemDetailID: number;

  @Column({ type: 'bigint', name: 'PackingListItemRef' })
  packingListItemRef: number;

  @Column({ type: 'bigint', name: 'PackingListRef' })
  packingListRef: number;

  @Column({ type: 'bigint', name: 'InvoiceItemRef' })
  invoiceItemRef: number;

  @Column({ type: 'bigint', name: 'PurchaseItemRef' })
  purchaseItemRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}