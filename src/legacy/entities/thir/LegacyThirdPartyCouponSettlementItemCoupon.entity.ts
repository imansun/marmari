import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ThirdPartyCouponSettlementItemCoupon' })
export class LegacyThirdPartyCouponSettlementItemCoupon {
  @PrimaryColumn({ type: 'bigint', name: 'ThirdPartyCouponSettlementItemCouponID' })
  thirdPartyCouponSettlementItemCouponID: number;

  @Column({ type: 'bigint', name: 'ThirdPartyCouponSettlementItemRef' })
  thirdPartyCouponSettlementItemRef: number;

  @Column({ type: 'bigint', name: 'ThirdPartyCouponRef' })
  thirdPartyCouponRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}