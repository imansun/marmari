import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HeadOfficeThirdPartyCouponDelivery' })
export class LegacyHeadOfficeThirdPartyCouponDelivery {
  @PrimaryColumn({ type: 'bigint', name: 'HeadOfficeThirdPartyCouponDeliveryID' })
  headOfficeThirdPartyCouponDeliveryID: number;

  @Column({ type: 'timestamp without time zone', name: 'DeliveryDate' })
  deliveryDate: Date;

  @Column({ type: 'bigint', name: 'ThirdPartyRef', nullable: true })
  thirdPartyRef: number | null;

  @Column({ type: 'bigint', name: 'ThirdPartyCouponTypeRef', nullable: true })
  thirdPartyCouponTypeRef: number | null;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}