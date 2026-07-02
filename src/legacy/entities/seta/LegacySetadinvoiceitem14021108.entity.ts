import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'setadinvoiceitem14021108' })
export class LegacySetadinvoiceitem14021108 {
  @PrimaryColumn({ type: 'bigint', name: 'InvoiceItemID' })
  invoiceItemID: number;

  @PrimaryColumn({ type: 'bigint', name: 'SalesAreaRef' })
  salesAreaRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'InvoiceRef' })
  invoiceRef: number;

  @PrimaryColumn({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @PrimaryColumn({ type: 'integer', name: 'Type' })
  type: number;

  @PrimaryColumn({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @PrimaryColumn({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @PrimaryColumn({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'ProductUnitRef' })
  productUnitRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'PriceBaseUnitRef' })
  priceBaseUnitRef: number;

  @PrimaryColumn({ type: 'numeric', name: 'PriceBaseFee' })
  priceBaseFee: number;

  @PrimaryColumn({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @PrimaryColumn({ type: 'bigint', name: 'ProductPackRef' })
  productPackRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'ProductPackItemRef' })
  productPackItemRef: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'ProductPackQuantity' })
  productPackQuantity: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @PrimaryColumn({ type: 'numeric', name: 'MajorUnitInitialQuantity' })
  majorUnitInitialQuantity: number;

  @PrimaryColumn({ type: 'numeric', name: 'InitialQuantity' })
  initialQuantity: number;

  @PrimaryColumn({ type: 'bigint', name: 'ShippingPointRef' })
  shippingPointRef: number | null;

  @PrimaryColumn({ type: 'integer', name: 'RecipientType' })
  recipientType: number;

  @PrimaryColumn({ type: 'bigint', name: 'RecipientRef' })
  recipientRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'RecipientPartyRef' })
  recipientPartyRef: number | null;

  @PrimaryColumn({ type: 'integer', name: 'DeliveryAddressType' })
  deliveryAddressType: number;

  @PrimaryColumn({ type: 'bigint', name: 'DeliveryAddressRef' })
  deliveryAddressRef: number | null;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @PrimaryColumn({ type: 'numeric', name: 'Fee' })
  fee: number;

  @PrimaryColumn({ type: 'numeric', name: 'Price' })
  price: number;

  @PrimaryColumn({ type: 'bigint', name: 'PrepaidBaseDocumentRef' })
  prepaidBaseDocumentRef: number | null;

  @PrimaryColumn({ type: 'integer', name: 'PrepaidBaseDocumentType' })
  prepaidBaseDocumentType: number | null;

  @PrimaryColumn({ type: 'integer', name: 'PrepaidBaseDocumentReferenceType' })
  prepaidBaseDocumentReferenceType: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'PrepaidAmount' })
  prepaidAmount: number;

  @PrimaryColumn({ type: 'boolean', name: 'PrepaidAmountSetByUser' })
  prepaidAmountSetByUser: boolean;

  @PrimaryColumn({ type: 'numeric', name: 'EffectiveNetPrice' })
  effectiveNetPrice: number;

  @PrimaryColumn({ type: 'integer', name: 'Status' })
  status: number;

  @PrimaryColumn({ type: 'numeric', name: 'ReductionAmount' })
  reductionAmount: number;

  @PrimaryColumn({ type: 'numeric', name: 'AdditionAmount' })
  additionAmount: number;

  @PrimaryColumn({ type: 'bigint', name: 'PlantRef' })
  plantRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'InventoryRef' })
  inventoryRef: number | null;

  @PrimaryColumn({ type: 'character varying', name: 'Description' })
  description: string | null;

  @PrimaryColumn({ type: 'bigint', name: 'ParentRef' })
  parentRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'OriginalFreeProductRef' })
  originalFreeProductRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'FreeProductBusinessPolicyRef' })
  freeProductBusinessPolicyRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'FreeProductBusinessPolicyConditionRowRef' })
  freeProductBusinessPolicyConditionRowRef: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'NetPrice' })
  netPrice: number;

  @PrimaryColumn({ type: 'bigint', name: 'ContractRef' })
  contractRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'ContractItemRef' })
  contractItemRef: number | null;

  @PrimaryColumn({ type: 'integer', name: 'ContractItemVersionNumber' })
  contractItemVersionNumber: number | null;

  @PrimaryColumn({ type: 'boolean', name: 'HasReservation' })
  hasReservation: boolean;

  @PrimaryColumn({ type: 'boolean', name: 'ReferenceHasReservation' })
  referenceHasReservation: boolean;

  @PrimaryColumn({ type: 'character varying', name: 'TrackingFactor1' })
  trackingFactor1: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'TrackingFactor2' })
  trackingFactor2: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'TrackingFactor3' })
  trackingFactor3: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'TrackingFactor4' })
  trackingFactor4: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'TrackingFactor5' })
  trackingFactor5: string | null;

  @PrimaryColumn({ type: 'bigint', name: 'PartTrackingFactorRef1' })
  partTrackingFactorRef1: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'PartTrackingFactorRef2' })
  partTrackingFactorRef2: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'PartTrackingFactorRef3' })
  partTrackingFactorRef3: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'PartTrackingFactorRef4' })
  partTrackingFactorRef4: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'PartTrackingFactorRef5' })
  partTrackingFactorRef5: number | null;

  @PrimaryColumn({ type: 'integer', name: 'TrackingFactorInputMode1' })
  trackingFactorInputMode1: number | null;

  @PrimaryColumn({ type: 'integer', name: 'TrackingFactorInputMode2' })
  trackingFactorInputMode2: number | null;

  @PrimaryColumn({ type: 'integer', name: 'TrackingFactorInputMode3' })
  trackingFactorInputMode3: number | null;

  @PrimaryColumn({ type: 'integer', name: 'TrackingFactorInputMode4' })
  trackingFactorInputMode4: number | null;

  @PrimaryColumn({ type: 'integer', name: 'TrackingFactorInputMode5' })
  trackingFactorInputMode5: number | null;

  @PrimaryColumn({ type: 'character varying', name: 'TrackingFactorValue' })
  trackingFactorValue: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'IncludedPolicies' })
  includedPolicies: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'ExcludedPolicies' })
  excludedPolicies: string | null;

  @PrimaryColumn({ type: 'numeric', name: 'InclusiveRelatedInitialQuantity' })
  inclusiveRelatedInitialQuantity: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'InclusiveRelatedInitialUnit' })
  inclusiveRelatedInitialUnit: number | null;

  @PrimaryColumn({ type: 'boolean', name: 'CanSetTrackingFactorManually' })
  canSetTrackingFactorManually: boolean;

  @PrimaryColumn({ type: 'bigint', name: 'ExitPolicyRef' })
  exitPolicyRef: number | null;

  @PrimaryColumn({ type: 'integer', name: 'SettlementRespite' })
  settlementRespite: number | null;

  @PrimaryColumn({ type: 'boolean', name: 'IsSettlementRespiteSetByReference' })
  isSettlementRespiteSetByReference: boolean;

  @PrimaryColumn({ type: 'bigint', name: 'BatchRef' })
  batchRef: number | null;

}