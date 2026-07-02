import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PromissoryNote' })
export class LegacyPromissoryNote {
  @PrimaryColumn({ type: 'bigint', name: 'PromissoryNoteID' })
  promissoryNoteID: number;

  @Column({ type: 'bigint', name: 'CashRef' })
  cashRef: number;

  @Column({ type: 'character varying', name: 'Series' })
  series: string;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'integer', name: 'Count' })
  count: number;

  @Column({ type: 'character varying', name: 'FirstSerial' })
  firstSerial: string;

  @Column({ type: 'timestamp without time zone', name: 'ShoppingDate', nullable: true })
  shoppingDate: Date | null;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}