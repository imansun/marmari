import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Repayment' })
export class LegacyRepayment {
  @PrimaryColumn({ type: 'bigint', name: 'RepaymentID' })
  repaymentID: number;

  @Column({ type: 'bigint', name: 'ContractRef' })
  contractRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'numeric', name: 'PrincipalAmount', nullable: true })
  principalAmount: number | null;

  @Column({ type: 'numeric', name: 'InterestAmount', nullable: true })
  interestAmount: number | null;

  @Column({ type: 'numeric', name: 'TotalAmount' })
  totalAmount: number;

  @Column({ type: 'numeric', name: 'DelayFines', nullable: true })
  delayFines: number | null;

  @Column({ type: 'numeric', name: 'TotalRewardsAccount', nullable: true })
  totalRewardsAccount: number | null;

  @Column({ type: 'numeric', name: 'PaidDelayFineAllowance' })
  paidDelayFineAllowance: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'CurrencyExchangeRateRef', nullable: true })
  currencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'CurrencyExchangeRate' })
  currencyExchangeRate: number;

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