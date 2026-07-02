import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailShopTenantRelation' })
export class LegacyRetailShopTenantRelation {
  @PrimaryColumn({ type: 'bigint', name: 'RetailShopTenantRelationID' })
  retailShopTenantRelationID: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'integer', name: 'TenantID' })
  tenantID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}