import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountingVoucher' })
export class LegacyAccountingVoucher {
  @PrimaryColumn({ type: 'bigint', name: 'AccountingVoucherID' })
  accountingVoucherID: number;

  @Column({ type: 'bigint', name: 'CalcPeriodRef' })
  calcPeriodRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bigint', name: 'VoucherRef' })
  voucherRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}