import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CostPartTransaction' })
export class LegacyCostPartTransaction {
  @PrimaryColumn({ type: 'bigint', name: 'CostPartTransactionID' })
  costPartTransactionID: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'bigint', name: 'CostPartRef' })
  costPartRef: number;

  @Column({ type: 'numeric', name: 'Cost' })
  cost: number;

  @Column({ type: 'bigint', name: 'DepreciationMethodRef', nullable: true })
  depreciationMethodRef: number | null;

  @Column({ type: 'numeric', name: 'DepreciationValue' })
  depreciationValue: number;

  @Column({ type: 'numeric', name: 'AccumulatedDepreciationValue' })
  accumulatedDepreciationValue: number;

  @Column({ type: 'numeric', name: 'RevaluationSurplus' })
  revaluationSurplus: number;

  @Column({ type: 'numeric', name: 'AccumulatedRevaluationSurplus' })
  accumulatedRevaluationSurplus: number;

  @Column({ type: 'numeric', name: 'ImpairmentLoss' })
  impairmentLoss: number;

  @Column({ type: 'numeric', name: 'AccumulatedImpairmentLoss' })
  accumulatedImpairmentLoss: number;

  @Column({ type: 'numeric', name: 'RevaluationRevenue' })
  revaluationRevenue: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate' })
  effectiveDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'integer', name: 'Duration', nullable: true })
  duration: number | null;

  @Column({ type: 'integer', name: 'CalculationRate', nullable: true })
  calculationRate: number | null;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'boolean', name: 'IsActive' })
  isActive: boolean;

  @Column({ type: 'numeric', name: 'UsefulLife', nullable: true })
  usefulLife: number | null;

  @Column({ type: 'numeric', name: 'DepreciationRate', nullable: true })
  depreciationRate: number | null;

  @Column({ type: 'numeric', name: 'BaseBookValue', nullable: true })
  baseBookValue: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}