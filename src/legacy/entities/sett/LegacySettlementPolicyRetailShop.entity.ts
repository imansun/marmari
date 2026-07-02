import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SettlementPolicyRetailShop' })
export class LegacySettlementPolicyRetailShop {
  @PrimaryColumn({ type: 'bigint', name: 'SettlementPolicyRetailShopID' })
  settlementPolicyRetailShopID: number;

  @Column({ type: 'bigint', name: 'SettlementPolicyRef' })
  settlementPolicyRef: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'State' })
  state: number;

}