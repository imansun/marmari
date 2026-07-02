import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountGroupLedgerParameterValue' })
export class LegacyAccountGroupLedgerParameterValue {
  @PrimaryColumn({ type: 'bigint', name: 'AccountGroupLedgerParameterValueID' })
  accountGroupLedgerParameterValueID: number;

  @Column({ type: 'bigint', name: 'AccountGroupLedgerRef' })
  accountGroupLedgerRef: number;

  @Column({ type: 'bigint', name: 'SupplierRef', nullable: true })
  supplierRef: number | null;

  @Column({ type: 'integer', name: 'PurchaseItemType', nullable: true })
  purchaseItemType: number | null;

  @Column({ type: 'integer', name: 'RecipientType', nullable: true })
  recipientType: number | null;

  @Column({ type: 'integer', name: 'PurchaseType', nullable: true })
  purchaseType: number | null;

  @Column({ type: 'integer', name: 'SupplierType', nullable: true })
  supplierType: number | null;

  @Column({ type: 'integer', name: 'SupplierBaseType', nullable: true })
  supplierBaseType: number | null;

  @Column({ type: 'bigint', name: 'CostCenterRef', nullable: true })
  costCenterRef: number | null;

  @Column({ type: 'bigint', name: 'ProjectRef', nullable: true })
  projectRef: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef', nullable: true })
  currencyRef: number | null;

  @Column({ type: 'bigint', name: 'PurchaseItemGroupRef', nullable: true })
  purchaseItemGroupRef: number | null;

  @Column({ type: 'bigint', name: 'CounterpartBranchRef', nullable: true })
  counterpartBranchRef: number | null;

  @Column({ type: 'bigint', name: 'MiscCostRef', nullable: true })
  miscCostRef: number | null;

  @Column({ type: 'integer', name: 'ContractType', nullable: true })
  contractType: number | null;

  @Column({ type: 'bigint', name: 'ContractTemplateRef', nullable: true })
  contractTemplateRef: number | null;

  @Column({ type: 'boolean', name: 'ContractBase', nullable: true })
  contractBase: boolean | null;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'integer', name: 'DL4SourceType', nullable: true })
  dL4SourceType: number | null;

  @Column({ type: 'integer', name: 'DL5SourceType', nullable: true })
  dL5SourceType: number | null;

  @Column({ type: 'integer', name: 'DL6SourceType', nullable: true })
  dL6SourceType: number | null;

  @Column({ type: 'integer', name: 'DL7SourceType', nullable: true })
  dL7SourceType: number | null;

  @Column({ type: 'integer', name: 'DL8SourceType', nullable: true })
  dL8SourceType: number | null;

  @Column({ type: 'integer', name: 'DL9SourceType', nullable: true })
  dL9SourceType: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'SupplierGroupRef', nullable: true })
  supplierGroupRef: number | null;

  @Column({ type: 'integer', name: 'PartNature', nullable: true })
  partNature: number | null;

  @Column({ type: 'integer', name: 'VoucherType', nullable: true })
  voucherType: number | null;

  @Column({ type: 'integer', name: 'InvoiceType', nullable: true })
  invoiceType: number | null;

}