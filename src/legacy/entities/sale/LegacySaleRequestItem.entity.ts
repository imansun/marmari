import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SaleRequestItem' })
export class LegacySaleRequestItem {
  @PrimaryColumn({ type: 'bigint', name: 'SaleRequestItemID' })
  saleRequestItemID: number;

  @Column({ type: 'bigint', name: 'SaleRequestRef' })
  saleRequestRef: number;

  @Column({ type: 'character varying', name: 'SaleRequestNumber' })
  saleRequestNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'SaleRequestDate' })
  saleRequestDate: Date;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'ProductUnitRef' })
  productUnitRef: number;

  @Column({ type: 'bigint', name: 'PriceBaseUnitRef' })
  priceBaseUnitRef: number;

  @Column({ type: 'numeric', name: 'PriceBaseFee' })
  priceBaseFee: number;

  @Column({ type: 'bigint', name: 'ProductPackRef', nullable: true })
  productPackRef: number | null;

  @Column({ type: 'bigint', name: 'ProductPackItemRef', nullable: true })
  productPackItemRef: number | null;

  @Column({ type: 'numeric', name: 'ProductPackQuantity', nullable: true })
  productPackQuantity: number | null;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'InitialQuantity' })
  initialQuantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitInitialQuantity' })
  majorUnitInitialQuantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitRequestedQuantity', nullable: true })
  majorUnitRequestedQuantity: number | null;

  @Column({ type: 'numeric', name: 'Fee', default: 0 })
  fee: number;

  @Column({ type: 'numeric', name: 'Price', default: 0 })
  price: number;

  @Column({ type: 'numeric', name: 'AdditionAmount', default: 0 })
  additionAmount: number;

  @Column({ type: 'numeric', name: 'ReductionAmount', default: 0 })
  reductionAmount: number;

  @Column({ type: 'numeric', name: 'NetPrice' })
  netPrice: number;

  @Column({ type: 'numeric', name: 'EffectiveNetPrice', default: 0 })
  effectiveNetPrice: number;

  @Column({ type: 'integer', name: 'DeliveryAddressType' })
  deliveryAddressType: number;

  @Column({ type: 'bigint', name: 'DeliveryAddressRef', nullable: true })
  deliveryAddressRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'bigint', name: 'OriginalFreeProductRef', nullable: true })
  originalFreeProductRef: number | null;

  @Column({ type: 'bigint', name: 'FreeProductBusinessPolicyRef', nullable: true })
  freeProductBusinessPolicyRef: number | null;

  @Column({ type: 'bigint', name: 'FreeProductBusinessPolicyConditionRowRef', nullable: true })
  freeProductBusinessPolicyConditionRowRef: number | null;

  @Column({ type: 'integer', name: 'Type', default: 1 })
  type: number;

  @Column({ type: 'bigint', name: 'ContractRef', nullable: true })
  contractRef: number | null;

  @Column({ type: 'bigint', name: 'ContractItemRef', nullable: true })
  contractItemRef: number | null;

  @Column({ type: 'integer', name: 'ContractItemVersionNumber', nullable: true })
  contractItemVersionNumber: number | null;

  @Column({ type: 'boolean', name: 'HasReservation' })
  hasReservation: boolean;

  @Column({ type: 'character varying', name: 'TrackingFactor1', nullable: true })
  trackingFactor1: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor2', nullable: true })
  trackingFactor2: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor3', nullable: true })
  trackingFactor3: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor4', nullable: true })
  trackingFactor4: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor5', nullable: true })
  trackingFactor5: string | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef1', nullable: true })
  partTrackingFactorRef1: number | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef2', nullable: true })
  partTrackingFactorRef2: number | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef3', nullable: true })
  partTrackingFactorRef3: number | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef4', nullable: true })
  partTrackingFactorRef4: number | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef5', nullable: true })
  partTrackingFactorRef5: number | null;

  @Column({ type: 'integer', name: 'TrackingFactorInputMode1', nullable: true })
  trackingFactorInputMode1: number | null;

  @Column({ type: 'integer', name: 'TrackingFactorInputMode2', nullable: true })
  trackingFactorInputMode2: number | null;

  @Column({ type: 'integer', name: 'TrackingFactorInputMode3', nullable: true })
  trackingFactorInputMode3: number | null;

  @Column({ type: 'integer', name: 'TrackingFactorInputMode4', nullable: true })
  trackingFactorInputMode4: number | null;

  @Column({ type: 'integer', name: 'TrackingFactorInputMode5', nullable: true })
  trackingFactorInputMode5: number | null;

  @Column({ type: 'character varying', name: 'TrackingFactorValue', nullable: true })
  trackingFactorValue: string | null;

  @Column({ type: 'character varying', name: 'IncludedPolicies', nullable: true })
  includedPolicies: string | null;

  @Column({ type: 'character varying', name: 'ExcludedPolicies', nullable: true })
  excludedPolicies: string | null;

  @Column({ type: 'numeric', name: 'InclusiveRelatedInitialQuantity', nullable: true })
  inclusiveRelatedInitialQuantity: number | null;

  @Column({ type: 'bigint', name: 'InclusiveRelatedInitialUnit', nullable: true })
  inclusiveRelatedInitialUnit: number | null;

  @Column({ type: 'boolean', name: 'CanSetTrackingFactorManually' })
  canSetTrackingFactorManually: boolean;

  @Column({ type: 'bigint', name: 'ExitPolicyRef', nullable: true })
  exitPolicyRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'RequestedQuantity', default: 0 })
  requestedQuantity: number;

  @Column({ type: 'integer', name: 'SettlementRespite', nullable: true })
  settlementRespite: number | null;

  @Column({ type: 'bigint', name: 'BatchRef', nullable: true })
  batchRef: number | null;

  @Column({ type: 'boolean', name: 'DeliveryAddressAsFinal', default: false })
  deliveryAddressAsFinal: boolean;

  @Column({ type: 'integer', name: 'MakeToOrderStatus', nullable: true })
  makeToOrderStatus: number | null;

  @Column({ type: 'boolean', name: 'NeedToSendForProduction', default: false })
  needToSendForProduction: boolean;

  @Column({ type: 'integer', name: 'ReserveStatus' })
  reserveStatus: number;

}