import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OfflineReturnInvoiceItem' })
export class LegacyOfflineReturnInvoiceItem {
  @PrimaryColumn({ type: 'bigint', name: 'OfflineReturnInvoiceItemID' })
  offlineReturnInvoiceItemID: number;

  @Column({ type: 'uuid', name: 'UniqueID' })
  uniqueID: string;

  @Column({ type: 'bigint', name: 'RetailInteriorSectionRef', nullable: true })
  retailInteriorSectionRef: number | null;

  @Column({ type: 'bigint', name: 'DocumentRef' })
  documentRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'integer', name: 'RowType' })
  rowType: number;

  @Column({ type: 'bigint', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'InventoryRef' })
  inventoryRef: number;

  @Column({ type: 'bigint', name: 'SalesAgentRef', nullable: true })
  salesAgentRef: number | null;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'bigint', name: 'MajorUnitRef' })
  majorUnitRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'InitialQuantity' })
  initialQuantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'numeric', name: 'Fee' })
  fee: number;

  @Column({ type: 'numeric', name: 'RealFee', nullable: true })
  realFee: number | null;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'numeric', name: 'NetPrice' })
  netPrice: number;

  @Column({ type: 'numeric', name: 'NonReferencedPromotionPrice', nullable: true })
  nonReferencedPromotionPrice: number | null;

  @Column({ type: 'numeric', name: 'EffectiveNetPrice' })
  effectiveNetPrice: number;

  @Column({ type: 'numeric', name: 'ReductionAmount' })
  reductionAmount: number;

  @Column({ type: 'numeric', name: 'AdditionAmount' })
  additionAmount: number;

  @Column({ type: 'bigint', name: 'SettlementPolicyRef', nullable: true })
  settlementPolicyRef: number | null;

  @Column({ type: 'integer', name: 'RecipientType' })
  recipientType: number;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'bigint', name: 'PriceListItemRef', nullable: true })
  priceListItemRef: number | null;

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

  @Column({ type: 'boolean', name: 'IsTrackingFactorInputModeManual1', nullable: true, default: false })
  isTrackingFactorInputModeManual1: boolean | null;

  @Column({ type: 'boolean', name: 'IsTrackingFactorInputModeManual2', nullable: true, default: false })
  isTrackingFactorInputModeManual2: boolean | null;

  @Column({ type: 'boolean', name: 'IsTrackingFactorInputModeManual3', nullable: true, default: false })
  isTrackingFactorInputModeManual3: boolean | null;

  @Column({ type: 'boolean', name: 'IsTrackingFactorInputModeManual4', nullable: true, default: false })
  isTrackingFactorInputModeManual4: boolean | null;

  @Column({ type: 'boolean', name: 'IsTrackingFactorInputModeManual5', nullable: true, default: false })
  isTrackingFactorInputModeManual5: boolean | null;

  @Column({ type: 'character varying', name: 'TrackingFactorValue', nullable: true })
  trackingFactorValue: string | null;

  @Column({ type: 'character varying', name: 'IncludedPolicies', nullable: true })
  includedPolicies: string | null;

  @Column({ type: 'character varying', name: 'ExcludedPolicies', nullable: true })
  excludedPolicies: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'HasReservation' })
  hasReservation: boolean;

  @Column({ type: 'bigint', name: 'FreeProductBusinessPolicyRef', nullable: true })
  freeProductBusinessPolicyRef: number | null;

  @Column({ type: 'bigint', name: 'FreeProductBusinessPolicyConditionRowRef', nullable: true })
  freeProductBusinessPolicyConditionRowRef: number | null;

  @Column({ type: 'boolean', name: 'TrackingFactorHasQuantity1', nullable: true, default: true })
  trackingFactorHasQuantity1: boolean | null;

  @Column({ type: 'boolean', name: 'TrackingFactorHasQuantity2', nullable: true, default: true })
  trackingFactorHasQuantity2: boolean | null;

  @Column({ type: 'boolean', name: 'TrackingFactorHasQuantity3', nullable: true, default: true })
  trackingFactorHasQuantity3: boolean | null;

  @Column({ type: 'boolean', name: 'TrackingFactorHasQuantity4', nullable: true, default: true })
  trackingFactorHasQuantity4: boolean | null;

  @Column({ type: 'boolean', name: 'TrackingFactorHasQuantity5', nullable: true, default: true })
  trackingFactorHasQuantity5: boolean | null;

  @Column({ type: 'character varying', name: 'PartSerial', nullable: true })
  partSerial: string | null;

  @Column({ type: 'bigint', name: 'SerialRef', nullable: true })
  serialRef: number | null;

  @Column({ type: 'bigint', name: 'ReturnReasonRef', nullable: true })
  returnReasonRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'DiscreteQuantity' })
  discreteQuantity: number;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

}