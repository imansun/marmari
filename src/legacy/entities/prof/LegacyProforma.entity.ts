import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Proforma' })
export class LegacyProforma {
  @PrimaryColumn({ type: 'bigint', name: 'ProformaID' })
  proformaID: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'bigint', name: 'SalesAreaRef', nullable: true })
  salesAreaRef: number | null;

  @Column({ type: 'bigint', name: 'SalesTypeRef' })
  salesTypeRef: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'bigint', name: 'CounterpartRef', nullable: true })
  counterpartRef: number | null;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate' })
  operationalCurrencyExchangeRate: number;

  @Column({ type: 'boolean', name: 'OperationalCurrencyExchangeRateIsReversed' })
  operationalCurrencyExchangeRateIsReversed: boolean;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'timestamp without time zone', name: 'ExpirationDate', nullable: true })
  expirationDate: Date | null;

  @Column({ type: 'boolean', name: 'IsDeployment' })
  isDeployment: boolean;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'integer', name: 'LastVersionNumber' })
  lastVersionNumber: number;

  @Column({ type: 'timestamp without time zone', name: 'LastVersionDate' })
  lastVersionDate: Date;

  @Column({ type: 'integer', name: 'PricingTerms' })
  pricingTerms: number;

  @Column({ type: 'bigint', name: 'TermOfPaymentRef' })
  termOfPaymentRef: number;

  @Column({ type: 'character varying', name: 'TermOfPaymentDescription' })
  termOfPaymentDescription: string;

  @Column({ type: 'timestamp without time zone', name: 'PaymentAgreementDate', nullable: true })
  paymentAgreementDate: Date | null;

  @Column({ type: 'bigint', name: 'PaymentCurrencyRef', nullable: true })
  paymentCurrencyRef: number | null;

  @Column({ type: 'bigint', name: 'PaymentCurrencyExchangeRateRef', nullable: true })
  paymentCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'PaymentCurrencyExchangeRate', nullable: true })
  paymentCurrencyExchangeRate: number | null;

  @Column({ type: 'boolean', name: 'PaymentCurrencyExchangeRateIsReversed', nullable: true })
  paymentCurrencyExchangeRateIsReversed: boolean | null;

  @Column({ type: 'bigint', name: 'PayerAccountRef' })
  payerAccountRef: number;

  @Column({ type: 'bigint', name: 'TermOfDeliveryRef' })
  termOfDeliveryRef: number;

  @Column({ type: 'bigint', name: 'OriginCountryRef' })
  originCountryRef: number;

  @Column({ type: 'bigint', name: 'DestinationCountryRef' })
  destinationCountryRef: number;

  @Column({ type: 'bigint', name: 'PriceFormulaRef', nullable: true })
  priceFormulaRef: number | null;

  @Column({ type: 'numeric', name: 'ProformaPriceFormulaVariableFactor', nullable: true })
  proformaPriceFormulaVariableFactor: number | null;

  @Column({ type: 'timestamp without time zone', name: 'PriceFormulaEffectiveDate1', nullable: true })
  priceFormulaEffectiveDate1: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'PriceFormulaEffectiveDate2', nullable: true })
  priceFormulaEffectiveDate2: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'PriceFormulaEffectiveDate3', nullable: true })
  priceFormulaEffectiveDate3: Date | null;

  @Column({ type: 'bigint', name: 'InvoicePriceFormulaRef', nullable: true })
  invoicePriceFormulaRef: number | null;

  @Column({ type: 'numeric', name: 'InvoicePriceFormulaVariableFactor', nullable: true })
  invoicePriceFormulaVariableFactor: number | null;

  @Column({ type: 'bigint', name: 'BankAccountRef', nullable: true })
  bankAccountRef: number | null;

  @Column({ type: 'bigint', name: 'PartyBankAccountRef', nullable: true })
  partyBankAccountRef: number | null;

  @Column({ type: 'boolean', name: 'PartialShipment' })
  partialShipment: boolean;

  @Column({ type: 'boolean', name: 'TransShipmentType' })
  transShipmentType: boolean;

  @Column({ type: 'integer', name: 'InspectionResponsibility' })
  inspectionResponsibility: number;

  @Column({ type: 'integer', name: 'InsuranceResponsibility' })
  insuranceResponsibility: number;

  @Column({ type: 'integer', name: 'ShipmentResponsibility' })
  shipmentResponsibility: number;

  @Column({ type: 'integer', name: 'DeliveryTime' })
  deliveryTime: number;

  @Column({ type: 'integer', name: 'InvoiceIssueTime' })
  invoiceIssueTime: number;

  @Column({ type: 'integer', name: 'ReceiptTime' })
  receiptTime: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'numeric', name: 'AdditionAmount' })
  additionAmount: number;

  @Column({ type: 'numeric', name: 'ReductionAmount' })
  reductionAmount: number;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'numeric', name: 'NetPrice' })
  netPrice: number;

  @Column({ type: 'numeric', name: 'EffectiveNetPrice' })
  effectiveNetPrice: number;

  @Column({ type: 'numeric', name: 'PrepaidAmount' })
  prepaidAmount: number;

  @Column({ type: 'boolean', name: 'BankAccountDeterminedOnInvoice' })
  bankAccountDeterminedOnInvoice: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'CalculationDate' })
  calculationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'character varying', name: 'IncludedPolicies', nullable: true })
  includedPolicies: string | null;

  @Column({ type: 'character varying', name: 'ExcludedPolicies', nullable: true })
  excludedPolicies: string | null;

  @Column({ type: 'boolean', name: 'IsFinalized' })
  isFinalized: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}