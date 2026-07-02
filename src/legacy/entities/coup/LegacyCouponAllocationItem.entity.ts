import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CouponAllocationItem' })
export class LegacyCouponAllocationItem {
  @PrimaryColumn({ type: 'bigint', name: 'CouponAllocationItemID' })
  couponAllocationItemID: number;

  @Column({ type: 'bigint', name: 'CouponAllocationRef' })
  couponAllocationRef: number;

  @Column({ type: 'bigint', name: 'GeneratedCouponInstanceRef' })
  generatedCouponInstanceRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}