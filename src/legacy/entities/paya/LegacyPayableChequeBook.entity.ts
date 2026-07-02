import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PayableChequeBook' })
export class LegacyPayableChequeBook {
  @PrimaryColumn({ type: 'bigint', name: 'PayableChequeBookID' })
  payableChequeBookID: number;

  @Column({ type: 'bigint', name: 'BankAccountRef' })
  bankAccountRef: number;

  @Column({ type: 'character varying', name: 'Series' })
  series: string;

  @Column({ type: 'integer', name: 'Count' })
  count: number;

  @Column({ type: 'character varying', name: 'FirstSerial' })
  firstSerial: string;

  @Column({ type: 'timestamp without time zone', name: 'RecieveDate', nullable: true })
  recieveDate: Date | null;

  @Column({ type: 'bigint', name: 'CashRef', nullable: true })
  cashRef: number | null;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'ChequePatternRef', nullable: true })
  chequePatternRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsSayad', default: false })
  isSayad: boolean;

}