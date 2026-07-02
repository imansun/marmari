import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InvoiceCountDailyAverage' })
export class LegacyInvoiceCountDailyAverage {
  @PrimaryColumn({ type: 'bigint', name: 'InvoiceCountDailyAverageID' })
  invoiceCountDailyAverageID: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'PreviousFiscalYearRef' })
  previousFiscalYearRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'integer', name: 'Average' })
  average: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

}