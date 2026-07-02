import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountGroupLedger' })
export class LegacyAccountGroupLedger {
  @PrimaryColumn({ type: 'bigint', name: 'AccountGroupLedgerID' })
  accountGroupLedgerID: number;

  @Column({ type: 'integer', name: 'AccountGroup' })
  accountGroup: number;

  @Column({ type: 'boolean', name: 'IsParametric' })
  isParametric: boolean;

  @Column({ type: 'bigint', name: 'PurchaseItemGroupingsRef', nullable: true })
  purchaseItemGroupingsRef: number | null;

  @Column({ type: 'bigint', name: 'SupplierGroupingsRef', nullable: true })
  supplierGroupingsRef: number | null;

  @Column({ type: 'bigint', name: 'SLRef', nullable: true })
  sLRef: number | null;

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

  @Column({ type: 'boolean', name: 'HasSupplierTypeParameter' })
  hasSupplierTypeParameter: boolean;

  @Column({ type: 'boolean', name: 'HasPurchaseItemTypeParameter' })
  hasPurchaseItemTypeParameter: boolean;

  @Column({ type: 'boolean', name: 'HasPurchaseItemGroupParameter' })
  hasPurchaseItemGroupParameter: boolean;

  @Column({ type: 'boolean', name: 'HasCostCenterParameter' })
  hasCostCenterParameter: boolean;

  @Column({ type: 'boolean', name: 'HasProjectParameter' })
  hasProjectParameter: boolean;

  @Column({ type: 'boolean', name: 'HasRecipientTypeParameter' })
  hasRecipientTypeParameter: boolean;

  @Column({ type: 'boolean', name: 'HasMiscCostParameter' })
  hasMiscCostParameter: boolean;

  @Column({ type: 'boolean', name: 'HasSupplierBaseTypeParameter' })
  hasSupplierBaseTypeParameter: boolean;

  @Column({ type: 'boolean', name: 'HasContractTypeParameter' })
  hasContractTypeParameter: boolean;

  @Column({ type: 'boolean', name: 'HasContractTemplateParameter' })
  hasContractTemplateParameter: boolean;

  @Column({ type: 'boolean', name: 'HasContractBaseParameter' })
  hasContractBaseParameter: boolean;

  @Column({ type: 'boolean', name: 'HasSupplierGroupingParameter' })
  hasSupplierGroupingParameter: boolean;

  @Column({ type: 'boolean', name: 'HasPartNatureParameter' })
  hasPartNatureParameter: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'HasVoucherTypeParameter', default: false })
  hasVoucherTypeParameter: boolean;

  @Column({ type: 'boolean', name: 'HasInvoiceTypeParameter', default: false })
  hasInvoiceTypeParameter: boolean;

}