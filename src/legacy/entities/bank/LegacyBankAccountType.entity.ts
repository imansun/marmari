import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BankAccountType' })
export class LegacyBankAccountType {
  @PrimaryColumn({ type: 'bigint', name: 'BankAccountTypeID' })
  bankAccountTypeID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'boolean', name: 'HasChequeBook' })
  hasChequeBook: boolean;

  @Column({ type: 'boolean', name: 'CanWithdrawal' })
  canWithdrawal: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}