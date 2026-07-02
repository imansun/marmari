import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PurchaseOrderItem' })
export class LegacyPurchaseOrderItem {
  @PrimaryColumn({ type: 'bigint', name: 'PurchaseOrderItemID' })
  purchaseOrderItemID: number;

  @Column({ type: 'bigint', name: 'PurchaseRequestItemRef', nullable: true })
  purchaseRequestItemRef: number | null;

  @Column({ type: 'bigint', name: 'PurchaseOrderRef' })
  purchaseOrderRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number;

  @Column({ type: 'bigint', name: 'SupplierRef' })
  supplierRef: number;

  @Column({ type: 'bigint', name: 'PurchaseItemRef' })
  purchaseItemRef: number;

  @Column({ type: 'timestamp without time zone', name: 'OrderDate' })
  orderDate: Date;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'numeric', name: 'Fee' })
  fee: number;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate', nullable: true })
  operationalCurrencyExchangeRate: number | null;

  @Column({ type: 'boolean', name: 'IsDirectCurrencyExchange', nullable: true })
  isDirectCurrencyExchange: boolean | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'numeric', name: 'Tolerance', nullable: true })
  tolerance: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'numeric', name: 'Additions' })
  additions: number;

  @Column({ type: 'numeric', name: 'Deductions' })
  deductions: number;

  @Column({ type: 'numeric', name: 'NetPrice', nullable: true })
  netPrice: number | null;

  @Column({ type: 'boolean', name: 'RefundableTax', nullable: true })
  refundableTax: boolean | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'PurchasingAgentRef' })
  purchasingAgentRef: number;

  @Column({ type: 'bigint', name: 'ContractRef', nullable: true })
  contractRef: number | null;

}