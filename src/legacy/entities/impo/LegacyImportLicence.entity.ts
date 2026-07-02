import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ImportLicence' })
export class LegacyImportLicence {
  @PrimaryColumn({ type: 'bigint', name: 'ImportLicenceID' })
  importLicenceID: number;

  @Column({ type: 'bigint', name: 'OrderRef' })
  orderRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'LicenceType' })
  licenceType: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'ImportLicenceDate' })
  importLicenceDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ValidationDate' })
  validationDate: Date;

  @Column({ type: 'bigint', name: 'LicensorCompanyRef' })
  licensorCompanyRef: number;

  @Column({ type: 'character varying', name: 'LicensorName', nullable: true })
  licensorName: string | null;

  @Column({ type: 'character varying', name: 'LicensorRole', nullable: true })
  licensorRole: string | null;

  @Column({ type: 'numeric', name: 'Wage', nullable: true })
  wage: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'CurrencyRef', nullable: true })
  currencyRef: number | null;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate', nullable: true })
  operationalCurrencyExchangeRate: number | null;

  @Column({ type: 'boolean', name: 'IsDirectCurrencyExchange', nullable: true })
  isDirectCurrencyExchange: boolean | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'VoucherRef', nullable: true })
  voucherRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'DraftVoucherRef', nullable: true })
  draftVoucherRef: number | null;

  @Column({ type: 'boolean', name: 'RefundableTax' })
  refundableTax: boolean;

  @Column({ type: 'numeric', name: 'Additions', nullable: true })
  additions: number | null;

  @Column({ type: 'numeric', name: 'Deductions', nullable: true })
  deductions: number | null;

  @Column({ type: 'numeric', name: 'Duty', nullable: true })
  duty: number | null;

  @Column({ type: 'numeric', name: 'Tax', nullable: true })
  tax: number | null;

  @Column({ type: 'numeric', name: 'NetPrice', nullable: true })
  netPrice: number | null;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'PurchasingDepartmentRef' })
  purchasingDepartmentRef: number;

  @Column({ type: 'bigint', name: 'ContractRef', nullable: true })
  contractRef: number | null;

}