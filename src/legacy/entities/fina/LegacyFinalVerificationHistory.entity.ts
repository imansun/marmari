import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FinalVerificationHistory' })
export class LegacyFinalVerificationHistory {
  @PrimaryColumn({ type: 'bigint', name: 'FinalVerificationHistoryID' })
  finalVerificationHistoryID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'StoreRef' })
  storeRef: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastFinalizingDate' })
  lastFinalizingDate: Date;

  @Column({ type: 'integer', name: 'OpreationType' })
  opreationType: number;

  @Column({ type: 'bigint', name: 'LedgerFiscalYearRef' })
  ledgerFiscalYearRef: number;

}