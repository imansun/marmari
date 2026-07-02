import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductCouponMapping' })
export class LegacyProductCouponMapping {
  @PrimaryColumn({ type: 'bigint', name: 'ProductCouponMappingID' })
  productCouponMappingID: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'character varying', name: 'Barcode' })
  barcode: string;

  @Column({ type: 'bigint', name: 'ProductUnitRef' })
  productUnitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}