import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PayableNoteTransaction' })
export class LegacyPayableNoteTransaction {
  @PrimaryColumn({ type: 'bigint', name: 'PayableNoteTransactionID' })
  payableNoteTransactionID: number;

  @Column({ type: 'bigint', name: 'PayableNoteRef' })
  payableNoteRef: number;

  @Column({ type: 'integer', name: 'NormalORGuarantee' })
  normalORGuarantee: number;

  @Column({ type: 'integer', name: 'DurationType', nullable: true })
  durationType: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'DocumentItemType' })
  documentItemType: number;

  @Column({ type: 'bigint', name: 'PreviousTransactionRef', nullable: true })
  previousTransactionRef: number | null;

  @Column({ type: 'integer', name: 'NoteType' })
  noteType: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'CashRef', nullable: true })
  cashRef: number | null;

  @Column({ type: 'bigint', name: 'CounterPartRef' })
  counterPartRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'boolean', name: 'IsDeployment' })
  isDeployment: boolean;

  @Column({ type: 'timestamp without time zone', name: 'AgreementDate', nullable: true })
  agreementDate: Date | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate' })
  operationalCurrencyExchangeRate: number;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'bigint', name: 'BaseCurrencyRef' })
  baseCurrencyRef: number;

  @Column({ type: 'numeric', name: 'BaseCurrencyExchangeRate', nullable: true })
  baseCurrencyExchangeRate: number | null;

  @Column({ type: 'bigint', name: 'BaseCurrencyExchangeRateRef', nullable: true })
  baseCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'BaseCurrencyAmount', nullable: true })
  baseCurrencyAmount: number | null;

  @Column({ type: 'numeric', name: 'OperationalAmount', nullable: true })
  operationalAmount: number | null;

  @Column({ type: 'timestamp without time zone', name: 'DueDate', nullable: true })
  dueDate: Date | null;

  @Column({ type: 'bigint', name: 'DocumentRef' })
  documentRef: number;

  @Column({ type: 'timestamp without time zone', name: 'DocumentDate' })
  documentDate: Date;

  @Column({ type: 'character varying', name: 'DocumentNumber', nullable: true })
  documentNumber: string | null;

  @Column({ type: 'integer', name: 'DocumentState' })
  documentState: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

}