import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxPayerBillItem' })
export class LegacyTaxPayerBillItem {
  @PrimaryColumn({ type: 'bigint', name: 'TaxPayerBillItemID' })
  taxPayerBillItemID: number;

  @Column({ type: 'integer', name: 'ReferenceItemType', nullable: true })
  referenceItemType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceItemRef', nullable: true })
  referenceItemRef: number | null;

  @Column({ type: 'integer', name: 'RelatedReferenceItemType', nullable: true })
  relatedReferenceItemType: number | null;

  @Column({ type: 'bigint', name: 'RelatedReferenceItemRef', nullable: true })
  relatedReferenceItemRef: number | null;

  @Column({ type: 'bigint', name: 'TaxPayerBillRef' })
  taxPayerBillRef: number;

  @Column({ type: 'bigint', name: 'ProductIdentifier' })
  productIdentifier: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'UnitAmount' })
  unitAmount: number;

  @Column({ type: 'numeric', name: 'CashAmount', nullable: true })
  cashAmount: number | null;

  @Column({ type: 'numeric', name: 'LoanAmount', nullable: true })
  loanAmount: number | null;

  @Column({ type: 'numeric', name: 'CurrencyAmount', nullable: true })
  currencyAmount: number | null;

  @Column({ type: 'character varying', name: 'CurrencyType', nullable: true })
  currencyType: string | null;

  @Column({ type: 'numeric', name: 'ExchangeRateWithRial', nullable: true })
  exchangeRateWithRial: number | null;

  @Column({ type: 'numeric', name: 'AmountBeforeDiscount', nullable: true })
  amountBeforeDiscount: number | null;

  @Column({ type: 'numeric', name: 'InvoiceAmountBeforeDiscount', nullable: true })
  invoiceAmountBeforeDiscount: number | null;

  @Column({ type: 'integer', name: 'PriceRoundingState' })
  priceRoundingState: number;

  @Column({ type: 'integer', name: 'PriceContradictionState' })
  priceContradictionState: number;

  @Column({ type: 'numeric', name: 'DiscountAmount', nullable: true })
  discountAmount: number | null;

  @Column({ type: 'numeric', name: 'AmountAfterDiscount', nullable: true })
  amountAfterDiscount: number | null;

  @Column({ type: 'numeric', name: 'TaxRate' })
  taxRate: number;

  @Column({ type: 'numeric', name: 'TaxAmount' })
  taxAmount: number;

  @Column({ type: 'numeric', name: 'InvoiceTaxAmount' })
  invoiceTaxAmount: number;

  @Column({ type: 'character varying', name: 'OtherAmountTitle', nullable: true })
  otherAmountTitle: string | null;

  @Column({ type: 'numeric', name: 'OtherAmountRate', nullable: true })
  otherAmountRate: number | null;

  @Column({ type: 'numeric', name: 'OtherAmount', nullable: true })
  otherAmount: number | null;

  @Column({ type: 'character varying', name: 'OtherLegalAmountTitle', nullable: true })
  otherLegalAmountTitle: string | null;

  @Column({ type: 'numeric', name: 'OtherLegalAmountRate', nullable: true })
  otherLegalAmountRate: number | null;

  @Column({ type: 'numeric', name: 'OtherLegalAmount', nullable: true })
  otherLegalAmount: number | null;

  @Column({ type: 'numeric', name: 'CashSharePaymentAmount', nullable: true })
  cashSharePaymentAmount: number | null;

  @Column({ type: 'numeric', name: 'CashSharePaymentTaxAmount', nullable: true })
  cashSharePaymentTaxAmount: number | null;

  @Column({ type: 'numeric', name: 'CashSharePaymentOtherAmount', nullable: true })
  cashSharePaymentOtherAmount: number | null;

  @Column({ type: 'numeric', name: 'LoanShareAmount', nullable: true })
  loanShareAmount: number | null;

  @Column({ type: 'numeric', name: 'LoanShareTaxAmount', nullable: true })
  loanShareTaxAmount: number | null;

  @Column({ type: 'numeric', name: 'LoanShareOtherAmount', nullable: true })
  loanShareOtherAmount: number | null;

  @Column({ type: 'numeric', name: 'ProductTotalAmount' })
  productTotalAmount: number;

  @Column({ type: 'integer', name: 'MeasurementUnit', nullable: true })
  measurementUnit: number | null;

  @Column({ type: 'numeric', name: 'NetWeight', nullable: true })
  netWeight: number | null;

  @Column({ type: 'numeric', name: 'RialValue', nullable: true })
  rialValue: number | null;

  @Column({ type: 'numeric', name: 'CurrencyValue', nullable: true })
  currencyValue: number | null;

  @Column({ type: 'character varying', name: 'ProductName', nullable: true })
  productName: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'ProductType' })
  productType: number;

  @Column({ type: 'bigint', name: 'ProductRef', nullable: true })
  productRef: number | null;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'bigint', name: 'TaxPayerUnitRef', nullable: true })
  taxPayerUnitRef: number | null;

  @Column({ type: 'character varying', name: 'UnitName', nullable: true })
  unitName: string | null;

  @Column({ type: 'character varying', name: 'TaxpayerUnitName', nullable: true })
  taxpayerUnitName: string | null;

  @Column({ type: 'bigint', name: 'TaxPayerUnitCode', nullable: true })
  taxPayerUnitCode: number | null;

  @Column({ type: 'character varying', name: 'TaxPayerCurrencyTitle', nullable: true })
  taxPayerCurrencyTitle: string | null;

  @Column({ type: 'bigint', name: 'TaxPayerCurrencyRef', nullable: true })
  taxPayerCurrencyRef: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef', nullable: true })
  currencyRef: number | null;

}