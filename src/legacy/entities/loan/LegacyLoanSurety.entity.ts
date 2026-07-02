import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LoanSurety' })
export class LegacyLoanSurety {
  @PrimaryColumn({ type: 'bigint', name: 'LoanSuretyID' })
  loanSuretyID: number;

  @Column({ type: 'bigint', name: 'LoanPaymentRef' })
  loanPaymentRef: number;

  @Column({ type: 'bigint', name: 'PartyRef' })
  partyRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}