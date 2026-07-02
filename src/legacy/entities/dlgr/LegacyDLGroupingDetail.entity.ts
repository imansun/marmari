import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DLGroupingDetail' })
export class LegacyDLGroupingDetail {
  @PrimaryColumn({ type: 'bigint', name: 'DLGroupingDetailID' })
  dLGroupingDetailID: number;

  @Column({ type: 'bigint', name: 'DLGroupingRef' })
  dLGroupingRef: number;

  @Column({ type: 'character varying', name: 'DLRef' })
  dLRef: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}