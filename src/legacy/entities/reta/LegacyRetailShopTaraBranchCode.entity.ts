import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailShopTaraBranchCode' })
export class LegacyRetailShopTaraBranchCode {
  @PrimaryColumn({ type: 'bigint', name: 'RetailShopTaraBranchCodeID' })
  retailShopTaraBranchCodeID: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bigint', name: 'BranchCode' })
  branchCode: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}