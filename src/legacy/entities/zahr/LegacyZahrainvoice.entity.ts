import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'zahrainvoice' })
export class LegacyZahrainvoice {
  @PrimaryColumn({ type: 'bigint', name: 'InvoiceID' })
  invoiceID: number;

  @PrimaryColumn({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef' })
  operationalCurrencyExchangeRateRef: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'OperationalCurrencyExchangeRate' })
  operationalCurrencyExchangeRate: number | null;

  @PrimaryColumn({ type: 'boolean', name: 'OperationalCurrencyExchangeRateIsReversed' })
  operationalCurrencyExchangeRateIsReversed: boolean | null;

  @PrimaryColumn({ type: 'character varying', name: 'Number' })
  number: string;

  @PrimaryColumn({ type: 'character varying', name: 'AutoNumber' })
  autoNumber: string | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @PrimaryColumn({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'OneTimeCustomerRef' })
  oneTimeCustomerRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'BrokerRef' })
  brokerRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'AgentRef' })
  agentRef: number | null;

  @PrimaryColumn({ type: 'integer', name: 'PayerType' })
  payerType: number;

  @PrimaryColumn({ type: 'bigint', name: 'PayerAccountRef' })
  payerAccountRef: number;

  @PrimaryColumn({ type: 'integer', name: 'DeliveryMethod' })
  deliveryMethod: number;

  @PrimaryColumn({ type: 'bigint', name: 'ShippingPointRef' })
  shippingPointRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'InventoryRef' })
  inventoryRef: number | null;

  @PrimaryColumn({ type: 'integer', name: 'RecipientType' })
  recipientType: number;

  @PrimaryColumn({ type: 'bigint', name: 'RecipientRef' })
  recipientRef: number | null;

  @PrimaryColumn({ type: 'integer', name: 'DeliveryAddressType' })
  deliveryAddressType: number;

  @PrimaryColumn({ type: 'bigint', name: 'DeliveryAddressRef' })
  deliveryAddressRef: number | null;

  @PrimaryColumn({ type: 'integer', name: 'DeliveryState' })
  deliveryState: number;

  @PrimaryColumn({ type: 'boolean', name: 'InitiallyDelivered' })
  initiallyDelivered: boolean;

  @PrimaryColumn({ type: 'bigint', name: 'PlantRef' })
  plantRef: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'Price' })
  price: number;

  @PrimaryColumn({ type: 'numeric', name: 'AdditionAmount' })
  additionAmount: number;

  @PrimaryColumn({ type: 'numeric', name: 'ReductionAmount' })
  reductionAmount: number;

  @PrimaryColumn({ type: 'numeric', name: 'EffectiveNetPrice' })
  effectiveNetPrice: number;

  @PrimaryColumn({ type: 'numeric', name: 'NetPrice' })
  netPrice: number;

  @PrimaryColumn({ type: 'integer', name: 'Status' })
  status: number;

  @PrimaryColumn({ type: 'bigint', name: 'Creator' })
  creator: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'SalesAreaRef' })
  salesAreaRef: number | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'CalculationDate' })
  calculationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @PrimaryColumn({ type: 'integer', name: 'CustomerType' })
  customerType: number;

  @PrimaryColumn({ type: 'bigint', name: 'PaymentAgreementRef' })
  paymentAgreementRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'SalesTypeRef' })
  salesTypeRef: number;

  @PrimaryColumn({ type: 'smallint', name: 'AmendState' })
  amendState: number;

  @PrimaryColumn({ type: 'character varying', name: 'Description' })
  description: string | null;

  @PrimaryColumn({ type: 'bigint', name: 'ContractRef' })
  contractRef: number | null;

  @PrimaryColumn({ type: 'integer', name: 'PolicyCalculationDateType' })
  policyCalculationDateType: number;

  @PrimaryColumn({ type: 'character varying', name: 'IncludedPolicies' })
  includedPolicies: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'ExcludedPolicies' })
  excludedPolicies: string | null;

  @PrimaryColumn({ type: 'bigint', name: 'ReferenceInvoiceRef' })
  referenceInvoiceRef: number | null;

  @PrimaryColumn({ type: 'boolean', name: 'PolicyCalculationConsideringBaseDocumentPolicyIsApplied' })
  policyCalculationConsideringBaseDocumentPolicyIsApplied: boolean | null;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @PrimaryColumn({ type: 'integer', name: 'SettlementRespite' })
  settlementRespite: number | null;

  @PrimaryColumn({ type: 'boolean', name: 'IsSettlementRespiteCalculated' })
  isSettlementRespiteCalculated: boolean | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'SettlementDate' })
  settlementDate: Date | null;

  @PrimaryColumn({ type: 'boolean', name: 'IsImported' })
  isImported: boolean;

  @PrimaryColumn({ type: 'numeric', name: 'TotalWeight' })
  totalWeight: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'WeightUnitRef' })
  weightUnitRef: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'TotalVolume' })
  totalVolume: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'VolumeUnitRef' })
  volumeUnitRef: number | null;

}