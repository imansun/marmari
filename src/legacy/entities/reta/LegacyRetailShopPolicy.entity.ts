import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailShopPolicy' })
export class LegacyRetailShopPolicy {
  @PrimaryColumn({ type: 'bigint', name: 'RetailShopPolicyID' })
  retailShopPolicyID: number;

  @Column({ type: 'bigint', name: 'RetailShopRef', nullable: true })
  retailShopRef: number | null;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'boolean', name: 'IsEnterpriseWide' })
  isEnterpriseWide: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}