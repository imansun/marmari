import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesPolicyExtraProperty' })
export class LegacySalesPolicyExtraProperty {
  @PrimaryColumn({ type: 'bigint', name: 'SalesPolicyExtraPropertyID' })
  salesPolicyExtraPropertyID: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'integer', name: 'DutyType' })
  dutyType: number;

  @Column({ type: 'boolean', name: 'IsEffectiveOnFreeProductItems' })
  isEffectiveOnFreeProductItems: boolean;

  @Column({ type: 'boolean', name: 'TransferPriceInPercentagePolicy' })
  transferPriceInPercentagePolicy: boolean;

  @Column({ type: 'boolean', name: 'IsContractBased' })
  isContractBased: boolean;

  @Column({ type: 'integer', name: 'FreeProductForEachBaseQuantityType' })
  freeProductForEachBaseQuantityType: number;

  @Column({ type: 'boolean', name: 'ReductionLimitContainsDiscount' })
  reductionLimitContainsDiscount: boolean;

  @Column({ type: 'boolean', name: 'ReductionLimitContainsMiscellaneous' })
  reductionLimitContainsMiscellaneous: boolean;

  @Column({ type: 'boolean', name: 'ReductionLimitContainsMiscellaneousFeeBased' })
  reductionLimitContainsMiscellaneousFeeBased: boolean;

  @Column({ type: 'boolean', name: 'ReductionLimitContainsFreeProductDiscount' })
  reductionLimitContainsFreeProductDiscount: boolean;

  @Column({ type: 'boolean', name: 'UserCanSetFreeProductInDocument' })
  userCanSetFreeProductInDocument: boolean;

  @Column({ type: 'boolean', name: 'HasTolerance' })
  hasTolerance: boolean;

  @Column({ type: 'boolean', name: 'InclusiveFreeProduct' })
  inclusiveFreeProduct: boolean;

  @Column({ type: 'boolean', name: 'UseAffectedItemUnitForInclusiveFreeProduct' })
  useAffectedItemUnitForInclusiveFreeProduct: boolean;

  @Column({ type: 'boolean', name: 'FreeProductAdaptationControl' })
  freeProductAdaptationControl: boolean;

  @Column({ type: 'integer', name: 'NonDefinitiveItemsPolicyOutputs', nullable: true })
  nonDefinitiveItemsPolicyOutputs: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'WillNotIncludeInVoucher' })
  willNotIncludeInVoucher: boolean;

  @Column({ type: 'boolean', name: 'PricedFreeProduct' })
  pricedFreeProduct: boolean;

  @Column({ type: 'integer', name: 'PricedFreeProductCalculationMethod', nullable: true })
  pricedFreeProductCalculationMethod: number | null;

  @Column({ type: 'numeric', name: 'PricedFreeProductAcceptableAmountDifference', nullable: true })
  pricedFreeProductAcceptableAmountDifference: number | null;

  @Column({ type: 'boolean', name: 'PolicyShouldBeSentToMobileAsText' })
  policyShouldBeSentToMobileAsText: boolean;

}