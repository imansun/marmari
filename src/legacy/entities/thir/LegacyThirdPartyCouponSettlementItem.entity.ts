import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ThirdPartyCouponSettlementItem' })
export class LegacyThirdPartyCouponSettlementItem {
  @PrimaryColumn({ type: 'bigint', name: 'ThirdPartyCouponSettlementItemID' })
  thirdPartyCouponSettlementItemID: number;

  @Column({ type: 'bigint', name: 'ThirdPartyCouponSettlementRef' })
  thirdPartyCouponSettlementRef: number;

  @Column({ type: 'bigint', name: 'CustomerRef', nullable: true })
  customerRef: number | null;

  @Column({ type: 'numeric', name: 'TotalAmount' })
  totalAmount: number;

  @Column({ type: 'bigint', name: 'ThirdPartyCouponTypeRef' })
  thirdPartyCouponTypeRef: number;

  @Column({ type: 'numeric', name: 'Commission', nullable: true })
  commission: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'TotalNumber', nullable: true })
  totalNumber: number | null;

}