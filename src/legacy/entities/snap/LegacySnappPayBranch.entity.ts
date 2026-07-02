import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SnappPayBranch' })
export class LegacySnappPayBranch {
  @PrimaryColumn({ type: 'bigint', name: 'SnappPayBranchID' })
  snappPayBranchID: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'character varying', name: 'BranchCode' })
  branchCode: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}