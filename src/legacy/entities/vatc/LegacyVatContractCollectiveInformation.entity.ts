import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VatContractCollectiveInformation' })
export class LegacyVatContractCollectiveInformation {
  @PrimaryColumn({ type: 'bigint', name: 'VatContractCollectiveInformationID' })
  vatContractCollectiveInformationID: number;

  @Column({ type: 'integer', name: 'Nationality', nullable: true })
  nationality: number | null;

  @Column({ type: 'character varying', name: 'ZipCode', nullable: true })
  zipCode: string | null;

  @Column({ type: 'character varying', name: 'PhonePrefix', nullable: true })
  phonePrefix: string | null;

  @Column({ type: 'character varying', name: 'PhoneNumber', nullable: true })
  phoneNumber: string | null;

  @Column({ type: 'character varying', name: 'Address', nullable: true })
  address: string | null;

  @Column({ type: 'character varying', name: 'CityCode', nullable: true })
  cityCode: string | null;

  @Column({ type: 'character varying', name: 'ProvinceCode', nullable: true })
  provinceCode: string | null;

  @Column({ type: 'character varying', name: 'Subject', nullable: true })
  subject: string | null;

  @Column({ type: 'timestamp without time zone', name: 'ContractDate', nullable: true })
  contractDate: Date | null;

  @Column({ type: 'character varying', name: 'ContractNumber', nullable: true })
  contractNumber: string | null;

  @Column({ type: 'numeric', name: 'TotalPrice', nullable: true })
  totalPrice: number | null;

  @Column({ type: 'character varying', name: 'StatementNumber', nullable: true })
  statementNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'StatementDate', nullable: true })
  statementDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'StatementApprovalDate', nullable: true })
  statementApprovalDate: Date | null;

  @Column({ type: 'numeric', name: 'GrossPrice', nullable: true })
  grossPrice: number | null;

  @Column({ type: 'numeric', name: 'NetPrice', nullable: true })
  netPrice: number | null;

  @Column({ type: 'numeric', name: 'Deductions', nullable: true })
  deductions: number | null;

  @Column({ type: 'numeric', name: 'ValueAddedTax', nullable: true })
  valueAddedTax: number | null;

  @Column({ type: 'numeric', name: 'Toll', nullable: true })
  toll: number | null;

  @Column({ type: 'numeric', name: 'CurrencyTotalPrice', nullable: true })
  currencyTotalPrice: number | null;

  @Column({ type: 'numeric', name: 'CurrencyGrossPrice', nullable: true })
  currencyGrossPrice: number | null;

  @Column({ type: 'numeric', name: 'CurrencyNetPrice', nullable: true })
  currencyNetPrice: number | null;

  @Column({ type: 'numeric', name: 'CurrencyDeductions', nullable: true })
  currencyDeductions: number | null;

  @Column({ type: 'numeric', name: 'CurrencyValueAddedTax', nullable: true })
  currencyValueAddedTax: number | null;

  @Column({ type: 'numeric', name: 'CurrencyToll', nullable: true })
  currencyToll: number | null;

  @Column({ type: 'numeric', name: 'CurrencyRateOfGrossPrice', nullable: true })
  currencyRateOfGrossPrice: number | null;

  @Column({ type: 'numeric', name: 'CurrencyRateOfNetPrice', nullable: true })
  currencyRateOfNetPrice: number | null;

  @Column({ type: 'numeric', name: 'CurrencyRateOfDeductions', nullable: true })
  currencyRateOfDeductions: number | null;

  @Column({ type: 'numeric', name: 'CurrencyRateOfValueAddedTax', nullable: true })
  currencyRateOfValueAddedTax: number | null;

  @Column({ type: 'numeric', name: 'CurrencyRateOfToll', nullable: true })
  currencyRateOfToll: number | null;

  @Column({ type: 'numeric', name: 'CurrencyGrossPriceRialEquivalent', nullable: true })
  currencyGrossPriceRialEquivalent: number | null;

  @Column({ type: 'numeric', name: 'CurrencyDeductionsRialEquivalent', nullable: true })
  currencyDeductionsRialEquivalent: number | null;

  @Column({ type: 'numeric', name: 'CurrencyNetPriceRialEquivalent', nullable: true })
  currencyNetPriceRialEquivalent: number | null;

  @Column({ type: 'numeric', name: 'CurrencyValueAddedTaxRialEquivalent', nullable: true })
  currencyValueAddedTaxRialEquivalent: number | null;

  @Column({ type: 'numeric', name: 'CurrencyTollRialEquivalent', nullable: true })
  currencyTollRialEquivalent: number | null;

  @Column({ type: 'numeric', name: 'CurrencyExtraTollRialEquivalent', nullable: true })
  currencyExtraTollRialEquivalent: number | null;

  @Column({ type: 'integer', name: 'ReportType', nullable: true })
  reportType: number | null;

  @Column({ type: 'bigint', name: 'PartyRegionalDivisionRef', nullable: true })
  partyRegionalDivisionRef: number | null;

  @Column({ type: 'bigint', name: 'TaxYearRef' })
  taxYearRef: number;

  @Column({ type: 'character varying', name: 'VoucherNumber', nullable: true })
  voucherNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'VoucherDate', nullable: true })
  voucherDate: Date | null;

  @Column({ type: 'bigint', name: 'VoucherRef', nullable: true })
  voucherRef: number | null;

  @Column({ type: 'character varying', name: 'EconomicCode', nullable: true })
  economicCode: string | null;

  @Column({ type: 'character varying', name: 'PersonCode', nullable: true })
  personCode: string | null;

  @Column({ type: 'integer', name: 'PartyType', nullable: true })
  partyType: number | null;

  @Column({ type: 'character varying', name: 'PersonFirstName', nullable: true })
  personFirstName: string | null;

  @Column({ type: 'character varying', name: 'PersonLastName', nullable: true })
  personLastName: string | null;

  @Column({ type: 'bigint', name: 'PartyRef', nullable: true })
  partyRef: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef', nullable: true })
  currencyRef: number | null;

  @Column({ type: 'numeric', name: 'ExtraTollAmount', nullable: true })
  extraTollAmount: number | null;

  @Column({ type: 'numeric', name: 'CurrencyExtraToll', nullable: true })
  currencyExtraToll: number | null;

  @Column({ type: 'numeric', name: 'CurrencyRateOfExtraToll', nullable: true })
  currencyRateOfExtraToll: number | null;

  @Column({ type: 'bigint', name: 'GatheringProviderRef' })
  gatheringProviderRef: number;

  @Column({ type: 'boolean', name: 'ItemIsReturn', nullable: true })
  itemIsReturn: boolean | null;

  @Column({ type: 'integer', name: 'Discriminator' })
  discriminator: number;

}