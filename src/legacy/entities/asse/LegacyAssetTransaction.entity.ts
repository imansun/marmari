import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssetTransaction' })
export class LegacyAssetTransaction {
  @PrimaryColumn({ type: 'bigint', name: 'AssetTransactionID' })
  assetTransactionID: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'integer', name: 'AssetState' })
  assetState: number;

  @Column({ type: 'integer', name: 'TransactionType' })
  transactionType: number;

  @Column({ type: 'integer', name: 'DocumentState' })
  documentState: number;

  @Column({ type: 'timestamp without time zone', name: 'DocumentDate' })
  documentDate: Date;

  @Column({ type: 'character varying', name: 'DocumentNumber', nullable: true })
  documentNumber: string | null;

  @Column({ type: 'bigint', name: 'DocumentRef', nullable: true })
  documentRef: number | null;

  @Column({ type: 'bigint', name: 'ProjectRef', nullable: true })
  projectRef: number | null;

  @Column({ type: 'bigint', name: 'CostCenterRef' })
  costCenterRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'AssetGroupRef' })
  assetGroupRef: number;

  @Column({ type: 'bigint', name: 'CollectorRef', nullable: true })
  collectorRef: number | null;

  @Column({ type: 'bigint', name: 'SettlementPlaceRef' })
  settlementPlaceRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'integer', name: 'PhysicalLocation' })
  physicalLocation: number;

  @Column({ type: 'bigint', name: 'DelivererRef', nullable: true })
  delivererRef: number | null;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'GasState', nullable: true })
  gasState: number | null;

}