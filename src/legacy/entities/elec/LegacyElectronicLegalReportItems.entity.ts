import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ElectronicLegalReportItems' })
export class LegacyElectronicLegalReportItems {
  @PrimaryColumn({ type: 'bigint', name: 'ElectronicLegalReportItemID' })
  electronicLegalReportItemID: number;

  @Column({ type: 'bigint', name: 'ElectronicLegalReportRef' })
  electronicLegalReportRef: number;

  @Column({ type: 'integer', name: 'RowNumber', nullable: true })
  rowNumber: number | null;

  @Column({ type: 'character varying', name: 'MaxDateInMonth', nullable: true })
  maxDateInMonth: string | null;

  @Column({ type: 'character varying', name: 'PersianMonthTitle', nullable: true })
  persianMonthTitle: string | null;

  @Column({ type: 'integer', name: 'PersianMonthNumber', nullable: true })
  persianMonthNumber: number | null;

  @Column({ type: 'character varying', name: 'VoucherDescription', nullable: true })
  voucherDescription: string | null;

  @Column({ type: 'character varying', name: 'MainAccountCode', nullable: true })
  mainAccountCode: string | null;

  @Column({ type: 'character varying', name: 'MainAccountTitle', nullable: true })
  mainAccountTitle: string | null;

  @Column({ type: 'character varying', name: 'SubAccountCode', nullable: true })
  subAccountCode: string | null;

  @Column({ type: 'character varying', name: 'SubAccountTitle', nullable: true })
  subAccountTitle: string | null;

  @Column({ type: 'numeric', name: 'DebitAmount', nullable: true })
  debitAmount: number | null;

  @Column({ type: 'numeric', name: 'CreditAmount', nullable: true })
  creditAmount: number | null;

  @Column({ type: 'timestamp without time zone', name: 'CreatedDate', nullable: true })
  createdDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}