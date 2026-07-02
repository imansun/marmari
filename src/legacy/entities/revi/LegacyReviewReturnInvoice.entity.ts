import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReviewReturnInvoice' })
export class LegacyReviewReturnInvoice {
  @Column({ type: 'bigint', name: 'ReturnInvoiceID' })
  returnInvoiceID: number;

  @PrimaryColumn({ type: 'bigint', name: 'ReturnInvoiceItemID' })
  returnInvoiceItemID: number;

  @Column({ type: 'bigint', name: 'InvoiceItemID', nullable: true })
  invoiceItemID: number | null;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'bigint', name: 'SalesTypeRef' })
  salesTypeRef: number;

  @Column({ type: 'bigint', name: 'SalesAreaRef' })
  salesAreaRef: number;

  @Column({ type: 'bigint', name: 'SalesChannelRef', nullable: true })
  salesChannelRef: number | null;

  @Column({ type: 'bigint', name: 'SalesDivisionRef' })
  salesDivisionRef: number;

  @Column({ type: 'bigint', name: 'SalesOrganizationRef' })
  salesOrganizationRef: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'bigint', name: 'BrokerRef', nullable: true })
  brokerRef: number | null;

  @Column({ type: 'bigint', name: 'InventoryRef', nullable: true })
  inventoryRef: number | null;

  @Column({ type: 'bigint', name: 'PlantRef', nullable: true })
  plantRef: number | null;

  @Column({ type: 'bigint', name: 'PayerAccountRef' })
  payerAccountRef: number;

  @Column({ type: 'integer', name: 'PayerType' })
  payerType: number;

  @Column({ type: 'bigint', name: 'PayerPartyRef' })
  payerPartyRef: number;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate' })
  operationalCurrencyExchangeRate: number;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'boolean', name: 'Replaceable' })
  replaceable: boolean;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

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

  @Column({ type: 'character varying', name: 'TrackingFactorValue', nullable: true })
  trackingFactorValue: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'Fee' })
  fee: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'numeric', name: 'BiggestUnitQuantity' })
  biggestUnitQuantity: number;

  @Column({ type: 'numeric', name: 'SmallestUnitQuantity' })
  smallestUnitQuantity: number;

  @Column({ type: 'numeric', name: 'DefaultUnitQuantity' })
  defaultUnitQuantity: number;

  @Column({ type: 'numeric', name: 'ReductionAmount' })
  reductionAmount: number;

  @Column({ type: 'numeric', name: 'AdditionAmount' })
  additionAmount: number;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'numeric', name: 'Tax' })
  tax: number;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'bigint', name: 'MajorUnitRef' })
  majorUnitRef: number;

  @Column({ type: 'bigint', name: 'BiggestUnitRef' })
  biggestUnitRef: number;

  @Column({ type: 'bigint', name: 'SmallestUnitRef' })
  smallestUnitRef: number;

  @Column({ type: 'bigint', name: 'VolumeUnitRef', nullable: true })
  volumeUnitRef: number | null;

  @Column({ type: 'numeric', name: 'Volume' })
  volume: number;

  @Column({ type: 'bigint', name: 'WeightUnitRef', nullable: true })
  weightUnitRef: number | null;

  @Column({ type: 'numeric', name: 'Weight' })
  weight: number;

  @Column({ type: 'numeric', name: 'PurchasePrice' })
  purchasePrice: number;

  @Column({ type: 'numeric', name: 'SalesPrice' })
  salesPrice: number;

  @Column({ type: 'numeric', name: 'ProducePrice' })
  producePrice: number;

  @Column({ type: 'bigint', name: 'FreeProductBusinessPolicyRef', nullable: true })
  freeProductBusinessPolicyRef: number | null;

  @Column({ type: 'character varying', name: 'FreeProduct', nullable: true })
  freeProduct: string | null;

  @Column({ type: 'numeric', name: 'TransportationCostsPrice' })
  transportationCostsPrice: number;

  @Column({ type: 'numeric', name: 'TaxPrice' })
  taxPrice: number;

  @Column({ type: 'numeric', name: 'MiscellaneousFeeBasedAdditionsPrice' })
  miscellaneousFeeBasedAdditionsPrice: number;

  @Column({ type: 'numeric', name: 'MiscellaneousAdditionsPrice' })
  miscellaneousAdditionsPrice: number;

  @Column({ type: 'numeric', name: 'DiscountPrice' })
  discountPrice: number;

  @Column({ type: 'numeric', name: 'FreeProductDiscountPrice' })
  freeProductDiscountPrice: number;

  @Column({ type: 'numeric', name: 'MiscellaneousReductionsPrice' })
  miscellaneousReductionsPrice: number;

  @Column({ type: 'numeric', name: 'MiscellaneousFeeBasedReductionsPrice' })
  miscellaneousFeeBasedReductionsPrice: number;

  @Column({ type: 'timestamp without time zone', name: 'ConvertDate' })
  convertDate: Date;

}