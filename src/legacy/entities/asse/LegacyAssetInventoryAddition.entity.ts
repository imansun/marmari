import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssetInventoryAddition' })
export class LegacyAssetInventoryAddition {
  @PrimaryColumn({ type: 'bigint', name: 'AssetInventoryAdditionID' })
  assetInventoryAdditionID: number;

  @Column({ type: 'bigint', name: 'AssetInventoryRef' })
  assetInventoryRef: number;

  @Column({ type: 'character varying', name: 'PlaqueNumber', nullable: true })
  plaqueNumber: string | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'AssetGroupRef' })
  assetGroupRef: number;

  @Column({ type: 'bigint', name: 'SettlementPlaceRef' })
  settlementPlaceRef: number;

  @Column({ type: 'bigint', name: 'CostCenterRef' })
  costCenterRef: number;

  @Column({ type: 'bigint', name: 'CollectorRef' })
  collectorRef: number;

  @Column({ type: 'bigint', name: 'DelivererRef', nullable: true })
  delivererRef: number | null;

  @Column({ type: 'bigint', name: 'ProjectRef', nullable: true })
  projectRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'UUID', nullable: true })
  uUID: string | null;

}