import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'GLVoucherReference' })
export class LegacyGLVoucherReference {
  @PrimaryColumn({ type: 'bigint', name: 'GLVoucherReferenceID' })
  gLVoucherReferenceID: number;

  @Column({ type: 'bigint', name: 'GLVoucherRef' })
  gLVoucherRef: number;

  @Column({ type: 'bigint', name: 'VoucherRef' })
  voucherRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}