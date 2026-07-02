import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConsumptionFeeCalculation' })
export class LegacyConsumptionFeeCalculation {
  @PrimaryColumn({ type: 'bigint', name: 'ConsumptionFeeCalculationID' })
  consumptionFeeCalculationID: number;

  @Column({ type: 'numeric', name: 'FeeActual' })
  feeActual: number;

  @Column({ type: 'numeric', name: 'FeeStandard' })
  feeStandard: number;

  @Column({ type: 'numeric', name: 'DurationFeeActual' })
  durationFeeActual: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'CostCenterExRef' })
  costCenterExRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}