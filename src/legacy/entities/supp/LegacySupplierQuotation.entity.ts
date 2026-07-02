import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SupplierQuotation' })
export class LegacySupplierQuotation {
  @PrimaryColumn({ type: 'bigint', name: 'SupplierQuotationID' })
  supplierQuotationID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'SupplierQuotationDate' })
  supplierQuotationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ExpirationDate', nullable: true })
  expirationDate: Date | null;

  @Column({ type: 'bigint', name: 'PurchasingDepartmentRef' })
  purchasingDepartmentRef: number;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'bigint', name: 'SupplierRef' })
  supplierRef: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'numeric', name: 'CurrencyRate', nullable: true })
  currencyRate: number | null;

  @Column({ type: 'numeric', name: 'AdvancePaymentAmount', nullable: true })
  advancePaymentAmount: number | null;

  @Column({ type: 'numeric', name: 'Tax' })
  tax: number;

  @Column({ type: 'numeric', name: 'Duty' })
  duty: number;

  @Column({ type: 'numeric', name: 'Discount' })
  discount: number;

  @Column({ type: 'numeric', name: 'TransportationCost' })
  transportationCost: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'TransportType', nullable: true })
  transportType: number | null;

  @Column({ type: 'integer', name: 'PurchaseMethod', nullable: true })
  purchaseMethod: number | null;

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

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

}