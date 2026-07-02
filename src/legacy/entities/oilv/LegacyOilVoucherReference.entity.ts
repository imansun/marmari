import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OilVoucherReference' })
export class LegacyOilVoucherReference {
  @PrimaryColumn({ type: 'bigint', name: 'OilVoucherReferenceID' })
  oilVoucherReferenceID: number;

  @Column({ type: 'bigint', name: 'OilVoucherRef' })
  oilVoucherRef: number;

  @Column({ type: 'bigint', name: 'VoucherRef' })
  voucherRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}