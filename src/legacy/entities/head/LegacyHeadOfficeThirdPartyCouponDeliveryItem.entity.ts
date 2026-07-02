import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HeadOfficeThirdPartyCouponDeliveryItem' })
export class LegacyHeadOfficeThirdPartyCouponDeliveryItem {
  @PrimaryColumn({ type: 'bigint', name: 'HeadOfficeThirdPartyCouponDeliveryItemID' })
  headOfficeThirdPartyCouponDeliveryItemID: number;

  @Column({ type: 'bigint', name: 'HeadOfficeThirdPartyCouponDeliveryRef' })
  headOfficeThirdPartyCouponDeliveryRef: number;

  @Column({ type: 'bigint', name: 'ThirdPartyCouponRef' })
  thirdPartyCouponRef: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'integer', name: 'Count' })
  count: number;

  @Column({ type: 'character varying', name: 'CustomerSettlementNumber', nullable: true })
  customerSettlementNumber: string | null;

  @Column({ type: 'character varying', name: 'ThirdPartyCouponNumber', nullable: true })
  thirdPartyCouponNumber: string | null;

  @Column({ type: 'bigint', name: 'ThirdPartyCouponTypeRef', nullable: true })
  thirdPartyCouponTypeRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}