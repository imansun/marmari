import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InterestAmountChange' })
export class LegacyInterestAmountChange {
  @PrimaryColumn({ type: 'bigint', name: 'InterestAmountChangeID' })
  interestAmountChangeID: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'ContractRef' })
  contractRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'CurrencyExchangeRateRef', nullable: true })
  currencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'CurrencyExchangeRate' })
  currencyExchangeRate: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'numeric', name: 'ReducibleInterestAmount' })
  reducibleInterestAmount: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}