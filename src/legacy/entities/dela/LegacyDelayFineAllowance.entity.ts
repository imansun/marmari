import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DelayFineAllowance' })
export class LegacyDelayFineAllowance {
  @PrimaryColumn({ type: 'bigint', name: 'DelayFineAllowanceID' })
  delayFineAllowanceID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'ContractRef' })
  contractRef: number;

  @Column({ type: 'numeric', name: 'FineAmount' })
  fineAmount: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'CurrencyExchangeRateRef', nullable: true })
  currencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'CurrencyExchangeRate' })
  currencyExchangeRate: number;

}