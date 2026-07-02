import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssetInventoryItem' })
export class LegacyAssetInventoryItem {
  @PrimaryColumn({ type: 'bigint', name: 'AssetInventoryItemID' })
  assetInventoryItemID: number;

  @Column({ type: 'bigint', name: 'AssetInventoryRef' })
  assetInventoryRef: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'bigint', name: 'OldBranchRef', nullable: true })
  oldBranchRef: number | null;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'OldSettlementPlaceRef', nullable: true })
  oldSettlementPlaceRef: number | null;

  @Column({ type: 'bigint', name: 'SettlementPlaceRef' })
  settlementPlaceRef: number;

  @Column({ type: 'bigint', name: 'OldCollectorRef', nullable: true })
  oldCollectorRef: number | null;

  @Column({ type: 'bigint', name: 'CollectorRef' })
  collectorRef: number;

  @Column({ type: 'bigint', name: 'OldDelivererRef', nullable: true })
  oldDelivererRef: number | null;

  @Column({ type: 'bigint', name: 'DelivererRef', nullable: true })
  delivererRef: number | null;

  @Column({ type: 'bigint', name: 'OldCostCenterRef', nullable: true })
  oldCostCenterRef: number | null;

  @Column({ type: 'bigint', name: 'CostCenterRef' })
  costCenterRef: number;

  @Column({ type: 'bigint', name: 'OldProjectRef', nullable: true })
  oldProjectRef: number | null;

  @Column({ type: 'bigint', name: 'ProjectRef', nullable: true })
  projectRef: number | null;

  @Column({ type: 'integer', name: 'OldState', nullable: true })
  oldState: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}