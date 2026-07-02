import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductCouponProvider' })
export class LegacyProductCouponProvider {
  @PrimaryColumn({ type: 'bigint', name: 'ProductCouponProviderID' })
  productCouponProviderID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'BaseUrl', nullable: true })
  baseUrl: string | null;

  @Column({ type: 'character varying', name: 'UserName', nullable: true })
  userName: string | null;

  @Column({ type: 'character varying', name: 'Password', nullable: true })
  password: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}