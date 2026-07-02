import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LandedCostItem' })
export class LegacyLandedCostItem {
  @PrimaryColumn({ type: 'bigint', name: 'LandedCostItemId' })
  landedCostItemId: number;

  @Column({ type: 'bigint', name: 'LandedCostRef' })
  landedCostRef: number;

  @Column({ type: 'numeric', name: 'Analysis', nullable: true })
  analysis: number | null;

  @Column({ type: 'numeric', name: 'CostShare', nullable: true })
  costShare: number | null;

  @Column({ type: 'numeric', name: 'CostShareInOperationalCurrency', nullable: true })
  costShareInOperationalCurrency: number | null;

  @Column({ type: 'integer', name: 'UsingType' })
  usingType: number;

  @Column({ type: 'integer', name: 'LandedCostVersion' })
  landedCostVersion: number;

  @Column({ type: 'bigint', name: 'CostRepositoryRef' })
  costRepositoryRef: number;

  @Column({ type: 'bigint', name: 'OwnerCostRepositoryRef', nullable: true })
  ownerCostRepositoryRef: number | null;

  @Column({ type: 'bigint', name: 'AnalysisCostRepositoryRef', nullable: true })
  analysisCostRepositoryRef: number | null;

  @Column({ type: 'boolean', name: 'UseAsNode' })
  useAsNode: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}