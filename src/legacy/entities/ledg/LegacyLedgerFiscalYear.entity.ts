import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LedgerFiscalYear' })
export class LegacyLedgerFiscalYear {
  @PrimaryColumn({ type: 'bigint', name: 'LedgerFiscalYearID' })
  ledgerFiscalYearID: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate' })
  endDate: Date;

  @Column({ type: 'boolean', name: 'IsGregorian' })
  isGregorian: boolean;

  @Column({ type: 'integer', name: 'ClosingState' })
  closingState: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CapitalSupplementaryPeriodEndDate', nullable: true })
  capitalSupplementaryPeriodEndDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'CurrentSupplementaryPeriodEndDate', nullable: true })
  currentSupplementaryPeriodEndDate: Date | null;

}