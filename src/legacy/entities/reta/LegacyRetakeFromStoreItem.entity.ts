import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetakeFromStoreItem' })
export class LegacyRetakeFromStoreItem {
  @PrimaryColumn({ type: 'bigint', name: 'RetakeFromStoreItemID' })
  retakeFromStoreItemID: number;

  @Column({ type: 'bigint', name: 'RetakeFromStoreRef' })
  retakeFromStoreRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'StoreDocumentNumber', nullable: true })
  storeDocumentNumber: string | null;

  @Column({ type: 'character varying', name: 'ExitReferenceNumber', nullable: true })
  exitReferenceNumber: string | null;

  @Column({ type: 'bigint', name: 'SettlementPlaceRef' })
  settlementPlaceRef: number;

  @Column({ type: 'bigint', name: 'CostCenterRef' })
  costCenterRef: number;

  @Column({ type: 'bigint', name: 'ProjectRef', nullable: true })
  projectRef: number | null;

  @Column({ type: 'bigint', name: 'CollectorRef' })
  collectorRef: number;

  @Column({ type: 'bigint', name: 'DelivererRef', nullable: true })
  delivererRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}