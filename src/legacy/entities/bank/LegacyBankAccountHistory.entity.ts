import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BankAccountHistory' })
export class LegacyBankAccountHistory {
  @PrimaryColumn({ type: 'bigint', name: 'BankAccountHistoryID' })
  bankAccountHistoryID: number;

  @Column({ type: 'bigint', name: 'BankAccountRef' })
  bankAccountRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}