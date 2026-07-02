import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Asset' })
export class LegacyAsset {
  @PrimaryColumn({ type: 'bigint', name: 'AssetID' })
  assetID: number;

  @Column({ type: 'character varying', name: 'PlaqueNumber', nullable: true })
  plaqueNumber: string | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'PartRef', nullable: true })
  partRef: number | null;

  @Column({ type: 'bigint', name: 'AssetGroupRef' })
  assetGroupRef: number;

  @Column({ type: 'bigint', name: 'AssetClassRef' })
  assetClassRef: number;

  @Column({ type: 'bigint', name: 'ProjectRef', nullable: true })
  projectRef: number | null;

  @Column({ type: 'bigint', name: 'CostCenterRef' })
  costCenterRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'SettlementPlaceRef' })
  settlementPlaceRef: number;

  @Column({ type: 'bigint', name: 'CollectorRef' })
  collectorRef: number;

  @Column({ type: 'timestamp without time zone', name: 'UtilizationDate' })
  utilizationDate: Date;

  @Column({ type: 'character varying', name: 'OldPlaqueNumber', nullable: true })
  oldPlaqueNumber: string | null;

  @Column({ type: 'bigint', name: 'CounterPartRef', nullable: true })
  counterPartRef: number | null;

  @Column({ type: 'integer', name: 'PhysicalLocation' })
  physicalLocation: number;

  @Column({ type: 'bigint', name: 'DelivererRef', nullable: true })
  delivererRef: number | null;

  @Column({ type: 'boolean', name: 'IsDeployment', default: false })
  isDeployment: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

}