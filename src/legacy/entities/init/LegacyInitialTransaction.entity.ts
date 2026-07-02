import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InitialTransaction' })
export class LegacyInitialTransaction {
  @PrimaryColumn({ type: 'bigint', name: 'AssetRef' })
  assetRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'CostCenterRef' })
  costCenterRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'AssetGroupRef' })
  assetGroupRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'ProjectRef' })
  projectRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'BranchRef' })
  branchRef: number | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'DocumentDate' })
  documentDate: Date | null;

  @PrimaryColumn({ type: 'integer', name: 'TransactionType' })
  transactionType: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'SettlementPlaceRef' })
  settlementPlaceRef: number | null;

}