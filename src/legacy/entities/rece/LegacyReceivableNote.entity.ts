import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReceivableNote' })
export class LegacyReceivableNote {
  @PrimaryColumn({ type: 'bigint', name: 'ReceivableNoteID' })
  receivableNoteID: number;

  @Column({ type: 'bigint', name: 'PartyBankAccountRef', nullable: true })
  partyBankAccountRef: number | null;

  @Column({ type: 'bigint', name: 'BankRef', nullable: true })
  bankRef: number | null;

  @Column({ type: 'bigint', name: 'CityRef', nullable: true })
  cityRef: number | null;

  @Column({ type: 'character varying', name: 'BankBranchCode', nullable: true })
  bankBranchCode: string | null;

  @Column({ type: 'character varying', name: 'BankBranchName', nullable: true })
  bankBranchName: string | null;

  @Column({ type: 'character varying', name: 'AccountNumber', nullable: true })
  accountNumber: string | null;

  @Column({ type: 'character varying', name: 'SerialNumber' })
  serialNumber: string;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'numeric', name: 'OperationalCurrencyAmount' })
  operationalCurrencyAmount: number;

  @Column({ type: 'timestamp without time zone', name: 'AgreementDate', nullable: true })
  agreementDate: Date | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'integer', name: 'NormalORGuarantee' })
  normalORGuarantee: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'NoteType' })
  noteType: number;

  @Column({ type: 'character varying', name: 'Series', nullable: true })
  series: string | null;

  @Column({ type: 'bigint', name: 'CashRef', nullable: true })
  cashRef: number | null;

  @Column({ type: 'bigint', name: 'CounterPartRef' })
  counterPartRef: number;

  @Column({ type: 'bigint', name: 'AccountRef', nullable: true })
  accountRef: number | null;

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

  @Column({ type: 'timestamp without time zone', name: 'DueDate', nullable: true })
  dueDate: Date | null;

  @Column({ type: 'integer', name: 'DurationType', nullable: true })
  durationType: number | null;

  @Column({ type: 'bigint', name: 'Deliverer', nullable: true })
  deliverer: number | null;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'character varying', name: 'InternationalNumber', nullable: true })
  internationalNumber: string | null;

  @Column({ type: 'numeric', name: 'VATax', nullable: true })
  vATax: number | null;

  @Column({ type: 'numeric', name: 'VAToll', nullable: true })
  vAToll: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'SayadNumber', nullable: true })
  sayadNumber: string | null;

}