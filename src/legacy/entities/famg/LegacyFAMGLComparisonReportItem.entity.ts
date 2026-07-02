import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FAMGLComparisonReportItem' })
export class LegacyFAMGLComparisonReportItem {
  @PrimaryColumn({ type: 'bigint', name: 'FAMGLComparisonReportItemID' })
  fAMGLComparisonReportItemID: number;

  @Column({ type: 'bigint', name: 'FAMGLComparisonReportRef' })
  fAMGLComparisonReportRef: number;

  @Column({ type: 'bigint', name: 'BranchRef', nullable: true })
  branchRef: number | null;

  @Column({ type: 'bigint', name: 'AssetClassRef', nullable: true })
  assetClassRef: number | null;

  @Column({ type: 'bigint', name: 'AssetGroupRef', nullable: true })
  assetGroupRef: number | null;

  @Column({ type: 'bigint', name: 'CostCenterRef', nullable: true })
  costCenterRef: number | null;

  @Column({ type: 'bigint', name: 'ProjectRef', nullable: true })
  projectRef: number | null;

  @Column({ type: 'bigint', name: 'SettlementPlaceRef', nullable: true })
  settlementPlaceRef: number | null;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'character varying', name: 'DL4Code', nullable: true })
  dL4Code: string | null;

  @Column({ type: 'character varying', name: 'DL5Code', nullable: true })
  dL5Code: string | null;

  @Column({ type: 'character varying', name: 'DL6Code', nullable: true })
  dL6Code: string | null;

  @Column({ type: 'character varying', name: 'DL7Code', nullable: true })
  dL7Code: string | null;

  @Column({ type: 'character varying', name: 'DL8Code', nullable: true })
  dL8Code: string | null;

  @Column({ type: 'character varying', name: 'DL9Code', nullable: true })
  dL9Code: string | null;

  @Column({ type: 'character varying', name: 'DL10Code', nullable: true })
  dL10Code: string | null;

  @Column({ type: 'character varying', name: 'DL11Code', nullable: true })
  dL11Code: string | null;

  @Column({ type: 'character varying', name: 'DL12Code', nullable: true })
  dL12Code: string | null;

  @Column({ type: 'character varying', name: 'DL13Code', nullable: true })
  dL13Code: string | null;

  @Column({ type: 'character varying', name: 'DL14Code', nullable: true })
  dL14Code: string | null;

  @Column({ type: 'character varying', name: 'DL15Code', nullable: true })
  dL15Code: string | null;

  @Column({ type: 'character varying', name: 'DL16Code', nullable: true })
  dL16Code: string | null;

  @Column({ type: 'character varying', name: 'DL17Code', nullable: true })
  dL17Code: string | null;

  @Column({ type: 'character varying', name: 'DL18Code', nullable: true })
  dL18Code: string | null;

  @Column({ type: 'character varying', name: 'DL19Code', nullable: true })
  dL19Code: string | null;

  @Column({ type: 'character varying', name: 'DL20Code', nullable: true })
  dL20Code: string | null;

  @Column({ type: 'numeric', name: 'FAMAmount', nullable: true })
  fAMAmount: number | null;

  @Column({ type: 'numeric', name: 'GLAmount', nullable: true })
  gLAmount: number | null;

}