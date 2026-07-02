import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Quotation' })
export class LegacyQuotation {
  @PrimaryColumn({ type: 'bigint', name: 'QuotationID' })
  quotationID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'QuotationDate' })
  quotationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ExpirationDate', nullable: true })
  expirationDate: Date | null;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'SupplierRef' })
  supplierRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate', nullable: true })
  operationalCurrencyExchangeRate: number | null;

  @Column({ type: 'boolean', name: 'IsDirectCurrencyExchange', nullable: true })
  isDirectCurrencyExchange: boolean | null;

  @Column({ type: 'numeric', name: 'CurrencyRate', nullable: true })
  currencyRate: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'numeric', name: 'AdvancePaymentAmount', nullable: true })
  advancePaymentAmount: number | null;

  @Column({ type: 'numeric', name: 'Additions' })
  additions: number;

  @Column({ type: 'numeric', name: 'Deductions' })
  deductions: number;

  @Column({ type: 'numeric', name: 'NetPrice', nullable: true })
  netPrice: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'ComparisonCurrencyRef', nullable: true })
  comparisonCurrencyRef: number | null;

  @Column({ type: 'bigint', name: 'ComparisonCurrencyRateRef', nullable: true })
  comparisonCurrencyRateRef: number | null;

  @Column({ type: 'bigint', name: 'PurchasingDepartmentRef' })
  purchasingDepartmentRef: number;

  @Column({ type: 'integer', name: 'TransportType', nullable: true })
  transportType: number | null;

  @Column({ type: 'integer', name: 'PaymentMethod' })
  paymentMethod: number;

  @Column({ type: 'integer', name: 'PurchaseMethod', nullable: true })
  purchaseMethod: number | null;

  @Column({ type: 'integer', name: 'Type', nullable: true })
  type: number | null;

  @Column({ type: 'bigint', name: 'PaymentSettlementRef', nullable: true })
  paymentSettlementRef: number | null;

}