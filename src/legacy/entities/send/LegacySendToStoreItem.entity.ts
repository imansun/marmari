import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SendToStoreItem' })
export class LegacySendToStoreItem {
  @PrimaryColumn({ type: 'bigint', name: 'SendToStoreItemID' })
  sendToStoreItemID: number;

  @Column({ type: 'bigint', name: 'SendToStoreRef' })
  sendToStoreRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'EntranceReferenceNumber', nullable: true })
  entranceReferenceNumber: string | null;

  @Column({ type: 'character varying', name: 'StoreDocumentNumber', nullable: true })
  storeDocumentNumber: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}