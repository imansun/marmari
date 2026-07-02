import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CashTransaction' })
export class LegacyCashTransaction {
  @PrimaryColumn({ type: 'bigint', name: 'CashTransactionID' })
  cashTransactionID: number;

  @Column({ type: 'bigint', name: 'CashRef' })
  cashRef: number;

  @Column({ type: 'numeric', name: 'Debit' })
  debit: number;

  @Column({ type: 'numeric', name: 'Credit' })
  credit: number;

  @Column({ type: 'integer', name: 'DocumentItemType' })
  documentItemType: number;

  @Column({ type: 'bigint', name: 'DocumentItemRef' })
  documentItemRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate' })
  operationalCurrencyExchangeRate: number;

  @Column({ type: 'numeric', name: 'OperationalCurrencyAmount' })
  operationalCurrencyAmount: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'boolean', name: 'IsDeployment' })
  isDeployment: boolean;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'character varying', name: 'DocumentNumber', nullable: true })
  documentNumber: string | null;

  @Column({ type: 'bigint', name: 'CounterPartRef', nullable: true })
  counterPartRef: number | null;

  @Column({ type: 'character varying', name: 'DocumentItemDescription', nullable: true })
  documentItemDescription: string | null;

  @Column({ type: 'bigint', name: 'AccountingOperationRef', nullable: true })
  accountingOperationRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}