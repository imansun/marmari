import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StandardVoucherTypeMappingItem' })
export class LegacyStandardVoucherTypeMappingItem {
  @PrimaryColumn({ type: 'bigint', name: 'StandardVoucherTypeMappingItemID' })
  standardVoucherTypeMappingItemID: number;

  @Column({ type: 'bigint', name: 'StandardVoucherTypeMappingRef' })
  standardVoucherTypeMappingRef: number;

  @Column({ type: 'bigint', name: 'StandardVoucherTypeEntityRef' })
  standardVoucherTypeEntityRef: number;

  @Column({ type: 'bigint', name: 'VoucherTypeRef' })
  voucherTypeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}