import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PurchaseRequestItem' })
export class LegacyPurchaseRequestItem {
  @PrimaryColumn({ type: 'bigint', name: 'PurchaseRequestItemID' })
  purchaseRequestItemID: number;

  @Column({ type: 'bigint', name: 'PurchaseRequestRef' })
  purchaseRequestRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'bigint', name: 'PurchaseItemRef' })
  purchaseItemRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'timestamp without time zone', name: 'DemandDate' })
  demandDate: Date;

  @Column({ type: 'bigint', name: 'PurchasingAgentRef', nullable: true })
  purchasingAgentRef: number | null;

  @Column({ type: 'integer', name: 'PurchaseType', nullable: true })
  purchaseType: number | null;

  @Column({ type: 'timestamp without time zone', name: 'InquiryDeadlineDate', nullable: true })
  inquiryDeadlineDate: Date | null;

  @Column({ type: 'bigint', name: 'SupplierRef', nullable: true })
  supplierRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'VerificationStepRef', nullable: true })
  verificationStepRef: number | null;

  @Column({ type: 'numeric', name: 'Fee', nullable: true })
  fee: number | null;

  @Column({ type: 'numeric', name: 'Price', nullable: true })
  price: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef', nullable: true })
  currencyRef: number | null;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate', nullable: true })
  operationalCurrencyExchangeRate: number | null;

  @Column({ type: 'boolean', name: 'IsDirectCurrencyExchange', nullable: true })
  isDirectCurrencyExchange: boolean | null;

  @Column({ type: 'bigint', name: 'UserPurchaseTypeRef', nullable: true })
  userPurchaseTypeRef: number | null;

  @Column({ type: 'bigint', name: 'CounterpartRef', nullable: true })
  counterpartRef: number | null;

  @Column({ type: 'integer', name: 'FeeType', nullable: true })
  feeType: number | null;

  @Column({ type: 'integer', name: 'PriorityEx', nullable: true })
  priorityEx: number | null;

  @Column({ type: 'bigint', name: 'ContractRef', nullable: true })
  contractRef: number | null;

  @Column({ type: 'bigint', name: 'ContractItemRef', nullable: true })
  contractItemRef: number | null;

}