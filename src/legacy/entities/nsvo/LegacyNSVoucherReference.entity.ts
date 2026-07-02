import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NSVoucherReference' })
export class LegacyNSVoucherReference {
  @PrimaryColumn({ type: 'bigint', name: 'NSVoucherReferenceID' })
  nSVoucherReferenceID: number;

  @Column({ type: 'bigint', name: 'NSVoucherRef' })
  nSVoucherRef: number;

  @Column({ type: 'bigint', name: 'VoucherRef' })
  voucherRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}