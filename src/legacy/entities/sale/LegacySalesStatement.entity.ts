import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesStatement' })
export class LegacySalesStatement {
  @PrimaryColumn({ type: 'bigint', name: 'SalesStatementID' })
  salesStatementID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'numeric', name: 'AdditionAmount' })
  additionAmount: number;

  @Column({ type: 'numeric', name: 'ReductionAmount' })
  reductionAmount: number;

  @Column({ type: 'numeric', name: 'NetPrice' })
  netPrice: number;

  @Column({ type: 'numeric', name: 'EffectiveNetPrice' })
  effectiveNetPrice: number;

  @Column({ type: 'numeric', name: 'BrokerWageNetAmount', nullable: true })
  brokerWageNetAmount: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'bigint', name: 'OldCurrencyRateRef', nullable: true })
  oldCurrencyRateRef: number | null;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate', nullable: true })
  operationalCurrencyExchangeRate: number | null;

  @Column({ type: 'boolean', name: 'OperationalCurrencyExchangeRateIsReversed', nullable: true })
  operationalCurrencyExchangeRateIsReversed: boolean | null;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'bigint', name: 'SalesAreaRef', nullable: true })
  salesAreaRef: number | null;

  @Column({ type: 'integer', name: 'RecipientType' })
  recipientType: number;

  @Column({ type: 'bigint', name: 'RecipientRef', nullable: true })
  recipientRef: number | null;

  @Column({ type: 'bigint', name: 'RecipientPartyRef', nullable: true })
  recipientPartyRef: number | null;

  @Column({ type: 'bigint', name: 'SellerBrokerRef', nullable: true })
  sellerBrokerRef: number | null;

  @Column({ type: 'bigint', name: 'CustomerBrokerRef', nullable: true })
  customerBrokerRef: number | null;

  @Column({ type: 'integer', name: 'DeliveryAddressType' })
  deliveryAddressType: number;

  @Column({ type: 'bigint', name: 'DeliveryAddressRef', nullable: true })
  deliveryAddressRef: number | null;

  @Column({ type: 'integer', name: 'StatementType' })
  statementType: number;

  @Column({ type: 'timestamp without time zone', name: 'DeliverySpace', nullable: true })
  deliverySpace: Date | null;

  @Column({ type: 'character varying', name: 'ContractNo', nullable: true })
  contractNo: string | null;

  @Column({ type: 'timestamp without time zone', name: 'ContractDate', nullable: true })
  contractDate: Date | null;

  @Column({ type: 'bigint', name: 'PlantRef', nullable: true })
  plantRef: number | null;

  @Column({ type: 'bigint', name: 'InventoryRef', nullable: true })
  inventoryRef: number | null;

  @Column({ type: 'bigint', name: 'ShippingPointRef', nullable: true })
  shippingPointRef: number | null;

  @Column({ type: 'bigint', name: 'PayerAccountRef', nullable: true })
  payerAccountRef: number | null;

  @Column({ type: 'boolean', name: 'HasCommissionVoucher', default: false })
  hasCommissionVoucher: boolean;

  @Column({ type: 'integer', name: 'Type', nullable: true })
  type: number | null;

  @Column({ type: 'integer', name: 'DeliveryPlaceType', nullable: true })
  deliveryPlaceType: number | null;

  @Column({ type: 'bigint', name: 'DeliveryPlaceref', nullable: true })
  deliveryPlaceref: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'CalculationDate' })
  calculationDate: Date;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'SalesTypeRef' })
  salesTypeRef: number;

  @Column({ type: 'bigint', name: 'PaymentAgreementRef', nullable: true })
  paymentAgreementRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'numeric', name: 'PrepaidAmount' })
  prepaidAmount: number;

  @Column({ type: 'character varying', name: 'IncludedPolicies', nullable: true })
  includedPolicies: string | null;

  @Column({ type: 'character varying', name: 'ExcludedPolicies', nullable: true })
  excludedPolicies: string | null;

  @Column({ type: 'boolean', name: 'IsImported' })
  isImported: boolean;

  @Column({ type: 'timestamp without time zone', name: 'ReleaseDate', nullable: true })
  releaseDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'SettlementDate', nullable: true })
  settlementDate: Date | null;

  @Column({ type: 'character varying', name: 'DetailNumber', nullable: true })
  detailNumber: string | null;

  @Column({ type: 'character varying', name: 'ContractID', nullable: true })
  contractID: string | null;

  @Column({ type: 'timestamp without time zone', name: 'AllocationDate', nullable: true })
  allocationDate: Date | null;

  @Column({ type: 'character varying', name: 'Producer', nullable: true })
  producer: string | null;

  @Column({ type: 'character varying', name: 'DeliveryPlace', nullable: true })
  deliveryPlace: string | null;

  @Column({ type: 'character varying', name: 'SupplierCode', nullable: true })
  supplierCode: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'WithoutUndertaker', nullable: true })
  withoutUndertaker: boolean | null;

}