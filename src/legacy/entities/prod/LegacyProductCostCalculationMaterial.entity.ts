import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductCostCalculationMaterial' })
export class LegacyProductCostCalculationMaterial {
  @PrimaryColumn({ type: 'bigint', name: 'ProductCostCalculationMaterialID' })
  productCostCalculationMaterialID: number;

  @Column({ type: 'bigint', name: 'ProductCostCalculationRef' })
  productCostCalculationRef: number;

  @Column({ type: 'bigint', name: 'ProductEquivalentUnitCalculationMaterialRef' })
  productEquivalentUnitCalculationMaterialRef: number;

  @Column({ type: 'bigint', name: 'ProductionConsumptionCalculationRef', nullable: true })
  productionConsumptionCalculationRef: number | null;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'AlternativeOfPartRef', nullable: true })
  alternativeOfPartRef: number | null;

  @Column({ type: 'numeric', name: 'ConsumptionVariance' })
  consumptionVariance: number;

  @Column({ type: 'numeric', name: 'ConsumptionRateVariance' })
  consumptionRateVariance: number;

  @Column({ type: 'bigint', name: 'ConsumptionFeeCalculationRef' })
  consumptionFeeCalculationRef: number;

  @Column({ type: 'numeric', name: 'ProducedFeeWithNormalWastage' })
  producedFeeWithNormalWastage: number;

  @Column({ type: 'numeric', name: 'ProducedFeeWithoutNormalWastage' })
  producedFeeWithoutNormalWastage: number;

  @Column({ type: 'numeric', name: 'BeginningFeeStandard' })
  beginningFeeStandard: number;

  @Column({ type: 'numeric', name: 'BeginningFeeActual' })
  beginningFeeActual: number;

  @Column({ type: 'numeric', name: 'FeeStandard' })
  feeStandard: number;

  @Column({ type: 'numeric', name: 'FeeActual' })
  feeActual: number;

  @Column({ type: 'numeric', name: 'DeliveryFeeStandard' })
  deliveryFeeStandard: number;

  @Column({ type: 'numeric', name: 'DeliveryFeeActual' })
  deliveryFeeActual: number;

  @Column({ type: 'numeric', name: 'AbnormalWastageFeeActual' })
  abnormalWastageFeeActual: number;

  @Column({ type: 'numeric', name: 'EndingFeeActual' })
  endingFeeActual: number;

  @Column({ type: 'numeric', name: 'AppliedVarianceFee' })
  appliedVarianceFee: number;

  @Column({ type: 'numeric', name: 'DurationFeeActual' })
  durationFeeActual: number;

  @Column({ type: 'numeric', name: 'BeginningPriceActual' })
  beginningPriceActual: number;

  @Column({ type: 'numeric', name: 'BeginningPriceStandard' })
  beginningPriceStandard: number;

  @Column({ type: 'numeric', name: 'PriceStandard' })
  priceStandard: number;

  @Column({ type: 'numeric', name: 'PriceActual' })
  priceActual: number;

  @Column({ type: 'numeric', name: 'DeliveryPriceStandard' })
  deliveryPriceStandard: number;

  @Column({ type: 'numeric', name: 'DeliveryShareOfNormalWastagePrice' })
  deliveryShareOfNormalWastagePrice: number;

  @Column({ type: 'numeric', name: 'DeliveryAppliedVariancePrice' })
  deliveryAppliedVariancePrice: number;

  @Column({ type: 'numeric', name: 'DeliveryPriceActual' })
  deliveryPriceActual: number;

  @Column({ type: 'numeric', name: 'AbnormalWastagePriceStandard' })
  abnormalWastagePriceStandard: number;

  @Column({ type: 'numeric', name: 'AbnormalAppliedVariancePrice' })
  abnormalAppliedVariancePrice: number;

  @Column({ type: 'numeric', name: 'AbnormalShareOfNormalWastagePrice' })
  abnormalShareOfNormalWastagePrice: number;

  @Column({ type: 'numeric', name: 'AbnormalWastagePrice' })
  abnormalWastagePrice: number;

  @Column({ type: 'numeric', name: 'EndingPriceStandard' })
  endingPriceStandard: number;

  @Column({ type: 'numeric', name: 'EndingAppliedVariancePrice' })
  endingAppliedVariancePrice: number;

  @Column({ type: 'numeric', name: 'EndingShareOfNormalWastagePrice' })
  endingShareOfNormalWastagePrice: number;

  @Column({ type: 'numeric', name: 'EndingPriceActual' })
  endingPriceActual: number;

  @Column({ type: 'numeric', name: 'AppliedVariancePrice' })
  appliedVariancePrice: number;

  @Column({ type: 'numeric', name: 'DurationPriceActual' })
  durationPriceActual: number;

  @Column({ type: 'numeric', name: 'RecyclingPriceStandard' })
  recyclingPriceStandard: number;

  @Column({ type: 'numeric', name: 'RecyclingPriceActual' })
  recyclingPriceActual: number;

  @Column({ type: 'numeric', name: 'RecyclingPriceVariance' })
  recyclingPriceVariance: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'ByProductPriceStandard' })
  byProductPriceStandard: number;

  @Column({ type: 'numeric', name: 'ByProductPriceActual' })
  byProductPriceActual: number;

  @Column({ type: 'numeric', name: 'ByProductPriceVariance' })
  byProductPriceVariance: number;

}