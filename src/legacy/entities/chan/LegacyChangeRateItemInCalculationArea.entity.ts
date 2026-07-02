import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ChangeRateItemInCalculationArea' })
export class LegacyChangeRateItemInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'ChangeRateItemInCalculationAreaID' })
  changeRateItemInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'ChangeRateItemRef' })
  changeRateItemRef: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'bigint', name: 'CostPartRef' })
  costPartRef: number;

  @Column({ type: 'bigint', name: 'DepreciationMethodRef', nullable: true })
  depreciationMethodRef: number | null;

  @Column({ type: 'bigint', name: 'PreviousDepreciationMethodRef', nullable: true })
  previousDepreciationMethodRef: number | null;

  @Column({ type: 'numeric', name: 'InitialAccumulatedDepreciationValue', nullable: true })
  initialAccumulatedDepreciationValue: number | null;

  @Column({ type: 'numeric', name: 'AdjustmentValue', nullable: true })
  adjustmentValue: number | null;

  @Column({ type: 'numeric', name: 'SalvageValue' })
  salvageValue: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}