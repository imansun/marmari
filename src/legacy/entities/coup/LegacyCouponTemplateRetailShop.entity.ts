import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CouponTemplateRetailShop' })
export class LegacyCouponTemplateRetailShop {
  @PrimaryColumn({ type: 'bigint', name: 'CouponTemplateRetailShopID' })
  couponTemplateRetailShopID: number;

  @Column({ type: 'bigint', name: 'CouponTemplateRef' })
  couponTemplateRef: number;

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