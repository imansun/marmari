import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VATCollectiveInformation' })
export class LegacyVATCollectiveInformation {
  @PrimaryColumn({ type: 'bigint', name: 'VATCollectiveInformationID' })
  vATCollectiveInformationID: number;

  @Column({ type: 'bigint', name: 'TaxYearRef' })
  taxYearRef: number;

  @Column({ type: 'bigint', name: 'GatheringProviderRef', nullable: true })
  gatheringProviderRef: number | null;

  @Column({ type: 'character varying', name: 'UniqueKey', nullable: true })
  uniqueKey: string | null;

  @Column({ type: 'boolean', name: 'ItemIsReturn', nullable: true })
  itemIsReturn: boolean | null;

  @Column({ type: 'numeric', name: 'ExtraTollAmount', nullable: true })
  extraTollAmount: number | null;

  @Column({ type: 'numeric', name: 'DiscountAmount', nullable: true })
  discountAmount: number | null;

  @Column({ type: 'integer', name: 'PartyType', nullable: true })
  partyType: number | null;

  @Column({ type: 'character varying', name: 'ZipCode', nullable: true })
  zipCode: string | null;

  @Column({ type: 'character varying', name: 'PartyLocalCode', nullable: true })
  partyLocalCode: string | null;

  @Column({ type: 'character varying', name: 'PartyPhoneNumber', nullable: true })
  partyPhoneNumber: string | null;

  @Column({ type: 'character varying', name: 'PartyAddress', nullable: true })
  partyAddress: string | null;

  @Column({ type: 'character varying', name: 'PersonFirstName', nullable: true })
  personFirstName: string | null;

  @Column({ type: 'character varying', name: 'PersonLastName', nullable: true })
  personLastName: string | null;

  @Column({ type: 'bigint', name: 'PartyRegionalDivisionRef', nullable: true })
  partyRegionalDivisionRef: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef', nullable: true })
  currencyRef: number | null;

  @Column({ type: 'numeric', name: 'CurrencyTransactionAmount', nullable: true })
  currencyTransactionAmount: number | null;

  @Column({ type: 'numeric', name: 'CurrencyTaxPayable', nullable: true })
  currencyTaxPayable: number | null;

  @Column({ type: 'numeric', name: 'CurrencyTollPayable', nullable: true })
  currencyTollPayable: number | null;

  @Column({ type: 'numeric', name: 'CurrencyTaxPrepaymentRefundable', nullable: true })
  currencyTaxPrepaymentRefundable: number | null;

  @Column({ type: 'numeric', name: 'CurrencyTollPrepaymentRefundable', nullable: true })
  currencyTollPrepaymentRefundable: number | null;

  @Column({ type: 'numeric', name: 'CurrencyTaxPrepaymentUnrefundable', nullable: true })
  currencyTaxPrepaymentUnrefundable: number | null;

  @Column({ type: 'numeric', name: 'CurrencyTollPrepaymentUnrefundable', nullable: true })
  currencyTollPrepaymentUnrefundable: number | null;

  @Column({ type: 'numeric', name: 'CurrencyExtraToll', nullable: true })
  currencyExtraToll: number | null;

  @Column({ type: 'numeric', name: 'CurrencyDiscount', nullable: true })
  currencyDiscount: number | null;

  @Column({ type: 'numeric', name: 'CurrencyRateOfTransactionAmount', nullable: true })
  currencyRateOfTransactionAmount: number | null;

  @Column({ type: 'numeric', name: 'CurrencyRateOfTaxPayable', nullable: true })
  currencyRateOfTaxPayable: number | null;

  @Column({ type: 'numeric', name: 'CurrencyRateOfTollPayable', nullable: true })
  currencyRateOfTollPayable: number | null;

  @Column({ type: 'numeric', name: 'CurrencyRateOfExtraToll', nullable: true })
  currencyRateOfExtraToll: number | null;

  @Column({ type: 'numeric', name: 'CurrencyRateOfDiscount', nullable: true })
  currencyRateOfDiscount: number | null;

  @Column({ type: 'numeric', name: 'CurrencyRateOfTaxPrepaymentRefundable', nullable: true })
  currencyRateOfTaxPrepaymentRefundable: number | null;

  @Column({ type: 'numeric', name: 'CurrencyRateOfTollPrepaymentRefundable', nullable: true })
  currencyRateOfTollPrepaymentRefundable: number | null;

  @Column({ type: 'numeric', name: 'CurrencyRateOfTaxPrepaymentUnrefundable', nullable: true })
  currencyRateOfTaxPrepaymentUnrefundable: number | null;

  @Column({ type: 'numeric', name: 'CurrencyRateOfTollPrepaymentUnrefundable', nullable: true })
  currencyRateOfTollPrepaymentUnrefundable: number | null;

  @Column({ type: 'character varying', name: 'FidaRegistration', nullable: true })
  fidaRegistration: string | null;

  @Column({ type: 'character varying', name: 'ProformaNumber', nullable: true })
  proformaNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'ProformaDate', nullable: true })
  proformaDate: Date | null;

  @Column({ type: 'character varying', name: 'EvaluationLocationCustomsCode', nullable: true })
  evaluationLocationCustomsCode: string | null;

  @Column({ type: 'character varying', name: 'OutingCustomsCode', nullable: true })
  outingCustomsCode: string | null;

  @Column({ type: 'character varying', name: 'PaymentAgreement', nullable: true })
  paymentAgreement: string | null;

  @Column({ type: 'character varying', name: 'SaleType', nullable: true })
  saleType: string | null;

  @Column({ type: 'character varying', name: 'SalesOffice', nullable: true })
  salesOffice: string | null;

  @Column({ type: 'integer', name: 'BuyTypeField', nullable: true })
  buyTypeField: number | null;

  @Column({ type: 'integer', name: 'SaleTypeField', nullable: true })
  saleTypeField: number | null;

  @Column({ type: 'integer', name: 'BuyerSellerType', nullable: true })
  buyerSellerType: number | null;

  @Column({ type: 'integer', name: 'AuditTopic', nullable: true })
  auditTopic: number | null;

  @Column({ type: 'integer', name: 'AmountReceiveType', nullable: true })
  amountReceiveType: number | null;

  @Column({ type: 'integer', name: 'VoucherNumber', nullable: true })
  voucherNumber: number | null;

  @Column({ type: 'integer', name: 'VoucherSequence', nullable: true })
  voucherSequence: number | null;

  @Column({ type: 'timestamp without time zone', name: 'VoucherDate', nullable: true })
  voucherDate: Date | null;

  @Column({ type: 'bigint', name: 'VoucherRef', nullable: true })
  voucherRef: number | null;

  @Column({ type: 'character varying', name: 'SourceModuleName' })
  sourceModuleName: string;

  @Column({ type: 'character varying', name: 'SourceModuleName_En' })
  sourceModuleNameEn: string;

  @Column({ type: 'character varying', name: 'SourceVoucherType' })
  sourceVoucherType: string;

  @Column({ type: 'character varying', name: 'SourceVoucherNumber' })
  sourceVoucherNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'SourceVoucherDate' })
  sourceVoucherDate: Date;

  @Column({ type: 'integer', name: 'PurchaseOrSale' })
  purchaseOrSale: number;

  @Column({ type: 'integer', name: 'TransactionType' })
  transactionType: number;

  @Column({ type: 'character varying', name: 'InvoiceNumber', nullable: true })
  invoiceNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'InvoiceDate', nullable: true })
  invoiceDate: Date | null;

  @Column({ type: 'character varying', name: 'ItemCode', nullable: true })
  itemCode: string | null;

  @Column({ type: 'character varying', name: 'ItemDescription', nullable: true })
  itemDescription: string | null;

  @Column({ type: 'integer', name: 'ItemOrService' })
  itemOrService: number;

  @Column({ type: 'character varying', name: 'PurchaserOrSalesManName', nullable: true })
  purchaserOrSalesManName: string | null;

  @Column({ type: 'character varying', name: 'EconomicCode', nullable: true })
  economicCode: string | null;

  @Column({ type: 'character varying', name: 'PersonCode', nullable: true })
  personCode: string | null;

  @Column({ type: 'character varying', name: 'CustomName', nullable: true })
  customName: string | null;

  @Column({ type: 'character varying', name: 'OffsetOrDestinationCountry', nullable: true })
  offsetOrDestinationCountry: string | null;

  @Column({ type: 'bigint', name: 'CountryRegionalDivisionId', nullable: true })
  countryRegionalDivisionId: number | null;

  @Column({ type: 'character varying', name: 'ContractNumber', nullable: true })
  contractNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'ContractDate', nullable: true })
  contractDate: Date | null;

  @Column({ type: 'character varying', name: 'KotajNumber', nullable: true })
  kotajNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'KotajDate', nullable: true })
  kotajDate: Date | null;

  @Column({ type: 'integer', name: 'TaxState' })
  taxState: number;

  @Column({ type: 'character varying', name: 'Store', nullable: true })
  store: string | null;

  @Column({ type: 'numeric', name: 'TransactionAmount' })
  transactionAmount: number;

  @Column({ type: 'numeric', name: 'TaxPayable' })
  taxPayable: number;

  @Column({ type: 'numeric', name: 'TollPayable' })
  tollPayable: number;

  @Column({ type: 'numeric', name: 'TaxPrepaymentRefundable' })
  taxPrepaymentRefundable: number;

  @Column({ type: 'numeric', name: 'TollPrepaymentRefundable' })
  tollPrepaymentRefundable: number;

  @Column({ type: 'numeric', name: 'TaxPrepaymentUnrefundable' })
  taxPrepaymentUnrefundable: number;

  @Column({ type: 'numeric', name: 'TollPrepaymentUnrefundable' })
  tollPrepaymentUnrefundable: number;

  @Column({ type: 'character varying', name: 'GroupingTag', nullable: true })
  groupingTag: string | null;

  @Column({ type: 'character varying', name: 'TaggingAgentKey', nullable: true })
  taggingAgentKey: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'VATPartyRef', nullable: true })
  vATPartyRef: number | null;

  @Column({ type: 'bigint', name: 'PartyRef', nullable: true })
  partyRef: number | null;

  @Column({ type: 'integer', name: 'PartType' })
  partType: number;

  @Column({ type: 'integer', name: 'SellerType', nullable: true })
  sellerType: number | null;

  @Column({ type: 'integer', name: 'BuyerType', nullable: true })
  buyerType: number | null;

  @Column({ type: 'numeric', name: 'PartServicePriceByLicense', nullable: true })
  partServicePriceByLicense: number | null;

  @Column({ type: 'numeric', name: 'PartServiceCurrencyPriceByLicense', nullable: true })
  partServiceCurrencyPriceByLicense: number | null;

  @Column({ type: 'numeric', name: 'PartServiceCurrencyEquivalentRateByLicense', nullable: true })
  partServiceCurrencyEquivalentRateByLicense: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'TradeBasedOnLabour', nullable: true })
  tradeBasedOnLabour: boolean | null;

  @Column({ type: 'numeric', name: 'ExtraTollRialEquivalent', nullable: true })
  extraTollRialEquivalent: number | null;

  @Column({ type: 'numeric', name: 'TaxPayableRialEquivalent', nullable: true })
  taxPayableRialEquivalent: number | null;

  @Column({ type: 'numeric', name: 'TollPayableRialEquivalent', nullable: true })
  tollPayableRialEquivalent: number | null;

  @Column({ type: 'numeric', name: 'TaxPrepaymentRefundableRialEquivalent', nullable: true })
  taxPrepaymentRefundableRialEquivalent: number | null;

  @Column({ type: 'numeric', name: 'TaxPrepaymentUnrefundableRialEquivalent', nullable: true })
  taxPrepaymentUnrefundableRialEquivalent: number | null;

  @Column({ type: 'numeric', name: 'TollPrepaymentRefundableRialEquivalent', nullable: true })
  tollPrepaymentRefundableRialEquivalent: number | null;

  @Column({ type: 'numeric', name: 'TollPrepaymentUnrefundableRialEquivalent', nullable: true })
  tollPrepaymentUnrefundableRialEquivalent: number | null;

  @Column({ type: 'integer', name: 'SourceEntityCode' })
  sourceEntityCode: number;

  @Column({ type: 'bigint', name: 'SourceEntityRef' })
  sourceEntityRef: number;

  @Column({ type: 'numeric', name: 'TaxDeducted', default: 0 })
  taxDeducted: number;

  @Column({ type: 'numeric', name: 'CurrencyTaxDeducted', nullable: true })
  currencyTaxDeducted: number | null;

  @Column({ type: 'numeric', name: 'CurrencyRateOfTaxDeducted', nullable: true })
  currencyRateOfTaxDeducted: number | null;

  @Column({ type: 'numeric', name: 'PartServiceRialEquivalent', nullable: true })
  partServiceRialEquivalent: number | null;

  @Column({ type: 'numeric', name: 'DiscountRialEquivalent', nullable: true })
  discountRialEquivalent: number | null;

  @Column({ type: 'numeric', name: 'PartServiceEquivalentRialByBook', nullable: true })
  partServiceEquivalentRialByBook: number | null;

  @Column({ type: 'numeric', name: 'PartServiceEquivalentRialByLicense', nullable: true })
  partServiceEquivalentRialByLicense: number | null;

}