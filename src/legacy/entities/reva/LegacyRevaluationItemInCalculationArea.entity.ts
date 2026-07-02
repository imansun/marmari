import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RevaluationItemInCalculationArea' })
export class LegacyRevaluationItemInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'RevaluationItemInCalculationAreaID' })
  revaluationItemInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'bigint', name: 'RevaluationItemRef' })
  revaluationItemRef: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'numeric', name: 'Revenue' })
  revenue: number;

  @Column({ type: 'numeric', name: 'ImpairmentLoss' })
  impairmentLoss: number;

  @Column({ type: 'numeric', name: 'RevaluationSurplus' })
  revaluationSurplus: number;

  @Column({ type: 'bigint', name: 'CostPartRef' })
  costPartRef: number;

  @Column({ type: 'numeric', name: 'Cost' })
  cost: number;

  @Column({ type: 'numeric', name: 'AccumulatedRevaluationSurplus' })
  accumulatedRevaluationSurplus: number;

  @Column({ type: 'numeric', name: 'AccumulatedImpairmentLoss' })
  accumulatedImpairmentLoss: number;

  @Column({ type: 'numeric', name: 'AccumulatedDepreciationValue' })
  accumulatedDepreciationValue: number;

  @Column({ type: 'numeric', name: 'BookValueDifference' })
  bookValueDifference: number;

  @Column({ type: 'bigint', name: 'DepreciationMethodRef', nullable: true })
  depreciationMethodRef: number | null;

  @Column({ type: 'numeric', name: 'UsefulLife', nullable: true })
  usefulLife: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}