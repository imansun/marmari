import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationArea' })
export class LegacyCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationAreaID' })
  calculationAreaID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'FiscalYearRef', nullable: true })
  fiscalYearRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'FiscalYearStartDate', nullable: true })
  fiscalYearStartDate: Date | null;

  @Column({ type: 'bigint', name: 'VoucherLedgerRef', nullable: true })
  voucherLedgerRef: number | null;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

}