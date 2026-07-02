import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BranchGroupingDetail' })
export class LegacyBranchGroupingDetail {
  @PrimaryColumn({ type: 'bigint', name: 'BranchGroupingDetailID' })
  branchGroupingDetailID: number;

  @Column({ type: 'bigint', name: 'BranchGroupingRef' })
  branchGroupingRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}