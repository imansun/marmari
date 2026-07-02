import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ClearanceItem' })
export class LegacyClearanceItem {
  @PrimaryColumn({ type: 'bigint', name: 'ClearanceItemID' })
  clearanceItemID: number;

  @Column({ type: 'bigint', name: 'ClearanceRef' })
  clearanceRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number;

  @Column({ type: 'bigint', name: 'PurchaseItemRef' })
  purchaseItemRef: number;

  @Column({ type: 'bigint', name: 'SupplierRef' })
  supplierRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate', nullable: true })
  operationalCurrencyExchangeRate: number | null;

  @Column({ type: 'boolean', name: 'IsDirectCurrencyExchange', nullable: true })
  isDirectCurrencyExchange: boolean | null;

  @Column({ type: 'numeric', name: 'ValueInCurrency' })
  valueInCurrency: number;

  @Column({ type: 'numeric', name: 'Tariff', nullable: true })
  tariff: number | null;

  @Column({ type: 'boolean', name: 'RefundableTax' })
  refundableTax: boolean;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'PurchaseRequestItemRef', nullable: true })
  purchaseRequestItemRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'PurchasingAgentRef' })
  purchasingAgentRef: number;

  @Column({ type: 'numeric', name: 'TaxPrice', nullable: true })
  taxPrice: number | null;

  @Column({ type: 'numeric', name: 'RefundableTaxPrice', nullable: true })
  refundableTaxPrice: number | null;

  @Column({ type: 'numeric', name: 'DutyPrice', nullable: true })
  dutyPrice: number | null;

  @Column({ type: 'numeric', name: 'RefundableDutyPrice', nullable: true })
  refundableDutyPrice: number | null;

  @Column({ type: 'numeric', name: 'CustomsDutyInOperationalCurrency', nullable: true })
  customsDutyInOperationalCurrency: number | null;

  @Column({ type: 'numeric', name: 'ValueInOperationalCurrency' })
  valueInOperationalCurrency: number;

  @Column({ type: 'numeric', name: 'Additions', nullable: true })
  additions: number | null;

  @Column({ type: 'numeric', name: 'Deductions', nullable: true })
  deductions: number | null;

}