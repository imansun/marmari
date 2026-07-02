import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CollectionListItem' })
export class LegacyCollectionListItem {
  @PrimaryColumn({ type: 'bigint', name: 'CollectionListItemID' })
  collectionListItemID: number;

  @Column({ type: 'bigint', name: 'CollectionListRef' })
  collectionListRef: number;

  @Column({ type: 'bigint', name: 'InvoiceRef' })
  invoiceRef: number;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}