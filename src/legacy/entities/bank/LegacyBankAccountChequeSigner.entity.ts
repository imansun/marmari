import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BankAccountChequeSigner' })
export class LegacyBankAccountChequeSigner {
  @PrimaryColumn({ type: 'bigint', name: 'BankAccountChequeSignerID' })
  bankAccountChequeSignerID: number;

  @Column({ type: 'bigint', name: 'BankAccountRef' })
  bankAccountRef: number;

  @Column({ type: 'bigint', name: 'PartyRef' })
  partyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}