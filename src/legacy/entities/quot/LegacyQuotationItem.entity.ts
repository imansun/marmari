import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'QuotationItem' })
export class LegacyQuotationItem {
  @PrimaryColumn({ type: 'bigint', name: 'QuotationItemID' })
  quotationItemID: number;

  @Column({ type: 'bigint', name: 'QuotationRef' })
  quotationRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'bigint', name: 'SupplierRef' })
  supplierRef: number;

  @Column({ type: 'bigint', name: 'PurchaseItemRef' })
  purchaseItemRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'numeric', name: 'Fee', nullable: true })
  fee: number | null;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'numeric', name: 'Additions' })
  additions: number;

  @Column({ type: 'numeric', name: 'Deductions' })
  deductions: number;

  @Column({ type: 'numeric', name: 'NetPrice', nullable: true })
  netPrice: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'DeliveryDeadline', nullable: true })
  deliveryDeadline: number | null;

  @Column({ type: 'bigint', name: 'PurchaseRequestItemRef', nullable: true })
  purchaseRequestItemRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'RefundableTax', nullable: true })
  refundableTax: boolean | null;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'integer', name: 'FeeDefinitiveness', nullable: true })
  feeDefinitiveness: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'Type', nullable: true })
  type: number | null;

  @Column({ type: 'bigint', name: 'PurchasingAgentRef' })
  purchasingAgentRef: number;

  @Column({ type: 'integer', name: 'PreviousState', nullable: true })
  previousState: number | null;

}