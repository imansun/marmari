import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherSpecificationCalcType' })
export class LegacyVoucherSpecificationCalcType {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherSpecificationCalcTypeID' })
  voucherSpecificationCalcTypeID: number;

  @Column({ type: 'bigint', name: 'VoucherSpecificationRef' })
  voucherSpecificationRef: number;

  @Column({ type: 'bigint', name: 'CompensationCalcTypeRef' })
  compensationCalcTypeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}