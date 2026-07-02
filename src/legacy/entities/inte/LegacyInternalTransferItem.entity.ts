import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InternalTransferItem' })
export class LegacyInternalTransferItem {
  @PrimaryColumn({ type: 'bigint', name: 'InternalTransferItemID' })
  internalTransferItemID: number;

  @Column({ type: 'bigint', name: 'InternalTransferRef' })
  internalTransferRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'bigint', name: 'AssetGroupRef', nullable: true })
  assetGroupRef: number | null;

  @Column({ type: 'bigint', name: 'SettlementPlaceRef', nullable: true })
  settlementPlaceRef: number | null;

  @Column({ type: 'bigint', name: 'CostCenterRef', nullable: true })
  costCenterRef: number | null;

  @Column({ type: 'bigint', name: 'CollectorRef', nullable: true })
  collectorRef: number | null;

  @Column({ type: 'bigint', name: 'ProjectRef', nullable: true })
  projectRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_EN', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bigint', name: 'DelivererRef', nullable: true })
  delivererRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'EquipmentHistoryRef', nullable: true })
  equipmentHistoryRef: number | null;

}