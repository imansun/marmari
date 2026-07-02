import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ClosingVoucherReferences' })
export class LegacyClosingVoucherReferences {
  @PrimaryColumn({ type: 'bigint', name: 'ClosingVoucherReferencesID' })
  closingVoucherReferencesID: number;

  @Column({ type: 'bigint', name: 'ClosingVoucherPatternRef' })
  closingVoucherPatternRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'VoucherRef' })
  voucherRef: number;

  @Column({ type: 'timestamp without time zone', name: 'ToDate' })
  toDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'VoucherDate' })
  voucherDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}