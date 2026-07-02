import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractItem' })
export class LegacyContractItem {
  @PrimaryColumn({ type: 'bigint', name: 'ContractItemID' })
  contractItemID: number;

  @Column({ type: 'bigint', name: 'ContractRef' })
  contractRef: number;

  @Column({ type: 'bigint', name: 'PurchaseItemRef' })
  purchaseItemRef: number;

  @Column({ type: 'bigint', name: 'EntityUnitRef' })
  entityUnitRef: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'bigint', name: 'SupplierRef', nullable: true })
  supplierRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'numeric', name: 'InitialQuantity', nullable: true })
  initialQuantity: number | null;

  @Column({ type: 'numeric', name: 'Quantity', nullable: true })
  quantity: number | null;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity', nullable: true })
  majorUnitQuantity: number | null;

  @Column({ type: 'numeric', name: 'AmountTolerance', nullable: true })
  amountTolerance: number | null;

  @Column({ type: 'numeric', name: 'QuantityTolerance', nullable: true })
  quantityTolerance: number | null;

  @Column({ type: 'numeric', name: 'Fee', nullable: true })
  fee: number | null;

  @Column({ type: 'numeric', name: 'Price', nullable: true })
  price: number | null;

  @Column({ type: 'numeric', name: 'ConsumerPrice', nullable: true })
  consumerPrice: number | null;

  @Column({ type: 'numeric', name: 'SalesPrice', nullable: true })
  salesPrice: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef', nullable: true })
  currencyRef: number | null;

  @Column({ type: 'integer', name: 'PaymentMethod', nullable: true })
  paymentMethod: number | null;

  @Column({ type: 'boolean', name: 'IsRefundable', nullable: true })
  isRefundable: boolean | null;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'integer', name: 'AmendmentRowNumber' })
  amendmentRowNumber: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'ContractTemplateRef' })
  contractTemplateRef: number;

  @Column({ type: 'character varying', name: 'Additional1', nullable: true })
  additional1: string | null;

  @Column({ type: 'character varying', name: 'Additional2', nullable: true })
  additional2: string | null;

  @Column({ type: 'character varying', name: 'Additional3', nullable: true })
  additional3: string | null;

  @Column({ type: 'character varying', name: 'Additional4', nullable: true })
  additional4: string | null;

  @Column({ type: 'character varying', name: 'Additional5', nullable: true })
  additional5: string | null;

  @Column({ type: 'numeric', name: 'Additions', nullable: true })
  additions: number | null;

  @Column({ type: 'numeric', name: 'Deductions', nullable: true })
  deductions: number | null;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'ContractAmendmentRef' })
  contractAmendmentRef: number;

  @Column({ type: 'bigint', name: 'ParentItemRef', nullable: true })
  parentItemRef: number | null;

  @Column({ type: 'bigint', name: 'MainItemRef', nullable: true })
  mainItemRef: number | null;

  @Column({ type: 'numeric', name: 'NetPrice', nullable: true })
  netPrice: number | null;

  @Column({ type: 'character varying', name: 'PartBarcode', nullable: true })
  partBarcode: string | null;

}