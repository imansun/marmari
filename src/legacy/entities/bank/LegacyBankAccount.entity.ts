import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BankAccount' })
export class LegacyBankAccount {
  @PrimaryColumn({ type: 'bigint', name: 'BankAccountID' })
  bankAccountID: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'BankBranchRef' })
  bankBranchRef: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'BankAccountTypeRef' })
  bankAccountTypeRef: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'numeric', name: 'SavedAmount', nullable: true })
  savedAmount: number | null;

  @Column({ type: 'numeric', name: 'ValidationAmount', nullable: true })
  validationAmount: number | null;

  @Column({ type: 'numeric', name: 'BlockedAmount', nullable: true })
  blockedAmount: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'character varying', name: 'InternationalNumber', nullable: true })
  internationalNumber: string | null;

  @Column({ type: 'boolean', name: 'AutomaticTransfer' })
  automaticTransfer: boolean;

  @Column({ type: 'integer', name: 'TransferMethod', nullable: true })
  transferMethod: number | null;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'numeric', name: 'ImportanceAmount', nullable: true })
  importanceAmount: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}