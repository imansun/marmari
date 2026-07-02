import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartyBankAccount' })
export class LegacyPartyBankAccount {
  @PrimaryColumn({ type: 'bigint', name: 'PartyBankAccountID' })
  partyBankAccountID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'AccountNumber' })
  accountNumber: string;

  @Column({ type: 'bigint', name: 'PartyRef' })
  partyRef: number;

  @Column({ type: 'bigint', name: 'BankRef' })
  bankRef: number;

  @Column({ type: 'bigint', name: 'BankBranchRef' })
  bankBranchRef: number;

  @Column({ type: 'integer', name: 'DocumentType' })
  documentType: number;

  @Column({ type: 'boolean', name: 'IsInBlackList' })
  isInBlackList: boolean;

  @Column({ type: 'character varying', name: 'InternationalNumber', nullable: true })
  internationalNumber: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}