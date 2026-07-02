import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RCCPWorkCenter' })
export class LegacyRCCPWorkCenter {
  @PrimaryColumn({ type: 'bigint', name: 'RCCPWorkCenterID' })
  rCCPWorkCenterID: number;

  @Column({ type: 'bigint', name: 'RCCPRef' })
  rCCPRef: number;

  @Column({ type: 'bigint', name: 'WorkCenterRef' })
  workCenterRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}