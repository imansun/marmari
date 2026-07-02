import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductCostCalculation' })
export class LegacyProductCostCalculation {
  @PrimaryColumn({ type: 'bigint', name: 'ProductCostCalculationID' })
  productCostCalculationID: number;

  @Column({ type: 'bigint', name: 'CalcPeriodRef' })
  calcPeriodRef: number;

  @Column({ type: 'bigint', name: 'ProductionRef' })
  productionRef: number;

  @Column({ type: 'bigint', name: 'JointProductPartRef', nullable: true })
  jointProductPartRef: number | null;

  @Column({ type: 'bigint', name: 'ProductEquivalentUnitCalculationRef' })
  productEquivalentUnitCalculationRef: number;

  @Column({ type: 'numeric', name: 'LabourTimeStandard' })
  labourTimeStandard: number;

  @Column({ type: 'numeric', name: 'LabourFixCostActual' })
  labourFixCostActual: number;

  @Column({ type: 'numeric', name: 'LabourFixCostStandard' })
  labourFixCostStandard: number;

  @Column({ type: 'numeric', name: 'LabourVariableCostActual' })
  labourVariableCostActual: number;

  @Column({ type: 'numeric', name: 'LabourVariableCostStandard' })
  labourVariableCostStandard: number;

  @Column({ type: 'numeric', name: 'LabourRateVariance' })
  labourRateVariance: number;

  @Column({ type: 'numeric', name: 'LabourEfficiencyVariance' })
  labourEfficiencyVariance: number;

  @Column({ type: 'numeric', name: 'OverheadTimeStandard' })
  overheadTimeStandard: number;

  @Column({ type: 'numeric', name: 'OverheadFixCostStandard' })
  overheadFixCostStandard: number;

  @Column({ type: 'numeric', name: 'OverheadFixCostActual' })
  overheadFixCostActual: number;

  @Column({ type: 'numeric', name: 'OverheadVariableCostActual' })
  overheadVariableCostActual: number;

  @Column({ type: 'numeric', name: 'OverheadVariableCostStandard' })
  overheadVariableCostStandard: number;

  @Column({ type: 'numeric', name: 'OverheadCostVariance' })
  overheadCostVariance: number;

  @Column({ type: 'numeric', name: 'OverheadUnusedCapacityVariance' })
  overheadUnusedCapacityVariance: number;

  @Column({ type: 'numeric', name: 'OverheadEfficiencyVariance' })
  overheadEfficiencyVariance: number;

  @Column({ type: 'numeric', name: 'OverheadControllableVariance' })
  overheadControllableVariance: number;

  @Column({ type: 'numeric', name: 'OverheadVolumeVariance' })
  overheadVolumeVariance: number;

  @Column({ type: 'numeric', name: 'ShareOfSecondaryProductActual' })
  shareOfSecondaryProductActual: number;

  @Column({ type: 'numeric', name: 'ShareOfSecondaryProductStandard' })
  shareOfSecondaryProductStandard: number;

  @Column({ type: 'numeric', name: 'LabourBeginningFeeStandard' })
  labourBeginningFeeStandard: number;

  @Column({ type: 'numeric', name: 'LabourBeginningFeeActual' })
  labourBeginningFeeActual: number;

  @Column({ type: 'numeric', name: 'OverheadBeginningFeeStandard' })
  overheadBeginningFeeStandard: number;

  @Column({ type: 'numeric', name: 'OverheadBeginningFeeActual' })
  overheadBeginningFeeActual: number;

  @Column({ type: 'numeric', name: 'LabourFeeStandard' })
  labourFeeStandard: number;

  @Column({ type: 'numeric', name: 'LabourFeeActual' })
  labourFeeActual: number;

  @Column({ type: 'numeric', name: 'OverheadFeeStandard' })
  overheadFeeStandard: number;

  @Column({ type: 'numeric', name: 'OverheadFeeActual' })
  overheadFeeActual: number;

  @Column({ type: 'numeric', name: 'MaterialFeeStandard' })
  materialFeeStandard: number;

  @Column({ type: 'numeric', name: 'MaterialFeeActual' })
  materialFeeActual: number;

  @Column({ type: 'numeric', name: 'SemiProductFeeStandard' })
  semiProductFeeStandard: number;

  @Column({ type: 'numeric', name: 'SemiProductFeeActual' })
  semiProductFeeActual: number;

  @Column({ type: 'numeric', name: 'LabourDeliveryFeeStandard' })
  labourDeliveryFeeStandard: number;

  @Column({ type: 'numeric', name: 'LabourDeliveryFeeActual' })
  labourDeliveryFeeActual: number;

  @Column({ type: 'numeric', name: 'OverheadDeliveryFeeStandard' })
  overheadDeliveryFeeStandard: number;

  @Column({ type: 'numeric', name: 'OverheadDeliveryFeeActual' })
  overheadDeliveryFeeActual: number;

  @Column({ type: 'numeric', name: 'MaterialDeliveryFeeStandard' })
  materialDeliveryFeeStandard: number;

  @Column({ type: 'numeric', name: 'MaterialDeliveryFeeActual' })
  materialDeliveryFeeActual: number;

  @Column({ type: 'numeric', name: 'SemiProductDeliveryFeeStandard' })
  semiProductDeliveryFeeStandard: number;

  @Column({ type: 'numeric', name: 'SemiProductDeliveryFeeActual' })
  semiProductDeliveryFeeActual: number;

  @Column({ type: 'numeric', name: 'DeliveryFeeStandard' })
  deliveryFeeStandard: number;

  @Column({ type: 'numeric', name: 'DeliveryFeeActual' })
  deliveryFeeActual: number;

  @Column({ type: 'numeric', name: 'LabourAbnormalWastageFeeActual' })
  labourAbnormalWastageFeeActual: number;

  @Column({ type: 'numeric', name: 'OverheadAbnormalWastageFeeActual' })
  overheadAbnormalWastageFeeActual: number;

  @Column({ type: 'numeric', name: 'LabourEndingFeeActual' })
  labourEndingFeeActual: number;

  @Column({ type: 'numeric', name: 'OverheadEndingFeeActual' })
  overheadEndingFeeActual: number;

  @Column({ type: 'numeric', name: 'LabourProducedFeeWithNormalWastage' })
  labourProducedFeeWithNormalWastage: number;

  @Column({ type: 'numeric', name: 'OverheadProducedFeeWithNormalWastage' })
  overheadProducedFeeWithNormalWastage: number;

  @Column({ type: 'numeric', name: 'LabourProducedFeeWithoutNormalWastage' })
  labourProducedFeeWithoutNormalWastage: number;

  @Column({ type: 'numeric', name: 'OverheadProducedFeeWithoutNormalWastage' })
  overheadProducedFeeWithoutNormalWastage: number;

  @Column({ type: 'numeric', name: 'LabourAppliedVarianceFee' })
  labourAppliedVarianceFee: number;

  @Column({ type: 'numeric', name: 'OverheadAppliedVarianceFee' })
  overheadAppliedVarianceFee: number;

  @Column({ type: 'numeric', name: 'LabourBeginningPriceStandard' })
  labourBeginningPriceStandard: number;

  @Column({ type: 'numeric', name: 'LabourBeginningPriceActual' })
  labourBeginningPriceActual: number;

  @Column({ type: 'numeric', name: 'OverheadBeginningPriceStandard' })
  overheadBeginningPriceStandard: number;

  @Column({ type: 'numeric', name: 'OverheadBeginningPriceActual' })
  overheadBeginningPriceActual: number;

  @Column({ type: 'numeric', name: 'MaterialPriceStandard' })
  materialPriceStandard: number;

  @Column({ type: 'numeric', name: 'MaterialPriceActual' })
  materialPriceActual: number;

  @Column({ type: 'numeric', name: 'SemiProductPriceStandard' })
  semiProductPriceStandard: number;

  @Column({ type: 'numeric', name: 'SemiProductPriceActual' })
  semiProductPriceActual: number;

  @Column({ type: 'numeric', name: 'PriceStandard' })
  priceStandard: number;

  @Column({ type: 'numeric', name: 'PriceActual' })
  priceActual: number;

  @Column({ type: 'numeric', name: 'LabourDeliveryPriceStandard' })
  labourDeliveryPriceStandard: number;

  @Column({ type: 'numeric', name: 'LabourDeliveryPriceActual' })
  labourDeliveryPriceActual: number;

  @Column({ type: 'numeric', name: 'LabourDeliveryShareOfNormalWastagePrice' })
  labourDeliveryShareOfNormalWastagePrice: number;

  @Column({ type: 'numeric', name: 'LabourDeliveryAppliedVariancePrice' })
  labourDeliveryAppliedVariancePrice: number;

  @Column({ type: 'numeric', name: 'OverheadDeliveryPriceStandard' })
  overheadDeliveryPriceStandard: number;

  @Column({ type: 'numeric', name: 'OverheadDeliveryPriceActual' })
  overheadDeliveryPriceActual: number;

  @Column({ type: 'numeric', name: 'OverheadDeliveryShareOfNormalWastagePrice' })
  overheadDeliveryShareOfNormalWastagePrice: number;

  @Column({ type: 'numeric', name: 'OverheadDeliveryAppliedVariancePrice' })
  overheadDeliveryAppliedVariancePrice: number;

  @Column({ type: 'numeric', name: 'MaterialDeliveryPriceStandard' })
  materialDeliveryPriceStandard: number;

  @Column({ type: 'numeric', name: 'MaterialDeliveryPriceActual' })
  materialDeliveryPriceActual: number;

  @Column({ type: 'numeric', name: 'SemiProductDeliveryPriceStandard' })
  semiProductDeliveryPriceStandard: number;

  @Column({ type: 'numeric', name: 'SemiProductDeliveryPriceActual' })
  semiProductDeliveryPriceActual: number;

  @Column({ type: 'numeric', name: 'DeliveryPriceStandard' })
  deliveryPriceStandard: number;

  @Column({ type: 'numeric', name: 'DeliveryPriceActual' })
  deliveryPriceActual: number;

  @Column({ type: 'numeric', name: 'LabourAbnormalWastagePriceStandard' })
  labourAbnormalWastagePriceStandard: number;

  @Column({ type: 'numeric', name: 'LabourAbnormalWastagePrice' })
  labourAbnormalWastagePrice: number;

  @Column({ type: 'numeric', name: 'LabourAbnormalShareOfNormalWastagePrice' })
  labourAbnormalShareOfNormalWastagePrice: number;

  @Column({ type: 'numeric', name: 'LabourAbnormalAppliedVariancePrice' })
  labourAbnormalAppliedVariancePrice: number;

  @Column({ type: 'numeric', name: 'OverheadAbnormalWastagePriceStandard' })
  overheadAbnormalWastagePriceStandard: number;

  @Column({ type: 'numeric', name: 'OverheadAbnormalWastagePrice' })
  overheadAbnormalWastagePrice: number;

  @Column({ type: 'numeric', name: 'OverheadAbnormalAppliedVariancePrice' })
  overheadAbnormalAppliedVariancePrice: number;

  @Column({ type: 'numeric', name: 'OverheadAbnormalShareOfNormalWastagePrice' })
  overheadAbnormalShareOfNormalWastagePrice: number;

  @Column({ type: 'numeric', name: 'LabourEndingPriceStandard' })
  labourEndingPriceStandard: number;

  @Column({ type: 'numeric', name: 'LabourEndingPriceActual' })
  labourEndingPriceActual: number;

  @Column({ type: 'numeric', name: 'LabourEndingShareOfNormalWastagePrice' })
  labourEndingShareOfNormalWastagePrice: number;

  @Column({ type: 'numeric', name: 'LabourEndingAppliedVariancePrice' })
  labourEndingAppliedVariancePrice: number;

  @Column({ type: 'numeric', name: 'OverheadEndingPriceStandard' })
  overheadEndingPriceStandard: number;

  @Column({ type: 'numeric', name: 'OverheadEndingPriceActual' })
  overheadEndingPriceActual: number;

  @Column({ type: 'numeric', name: 'OverheadEndingAppliedVariancePrice' })
  overheadEndingAppliedVariancePrice: number;

  @Column({ type: 'numeric', name: 'OverheadEndingShareOfNormalWastagePrice' })
  overheadEndingShareOfNormalWastagePrice: number;

  @Column({ type: 'numeric', name: 'LabourAppliedVariancePrice' })
  labourAppliedVariancePrice: number;

  @Column({ type: 'numeric', name: 'OverheadAppliedVariancePrice' })
  overheadAppliedVariancePrice: number;

  @Column({ type: 'numeric', name: 'MaterialRecyclingPriceStandard' })
  materialRecyclingPriceStandard: number;

  @Column({ type: 'numeric', name: 'MaterialRecyclingPriceActual' })
  materialRecyclingPriceActual: number;

  @Column({ type: 'numeric', name: 'SemiProductRecyclingPriceStandard' })
  semiProductRecyclingPriceStandard: number;

  @Column({ type: 'numeric', name: 'SemiProductRecyclingPriceActual' })
  semiProductRecyclingPriceActual: number;

  @Column({ type: 'numeric', name: 'MaterialRecyclingPriceVariance' })
  materialRecyclingPriceVariance: number;

  @Column({ type: 'numeric', name: 'SemiProductRecyclingPriceVariance' })
  semiProductRecyclingPriceVariance: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'SeperationCalculationType', nullable: true })
  seperationCalculationType: number | null;

}