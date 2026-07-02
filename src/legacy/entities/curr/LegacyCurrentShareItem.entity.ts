import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CurrentShareItem' })
export class LegacyCurrentShareItem {
  @PrimaryColumn({ type: 'bigint', name: 'CurrentShareItemID' })
  currentShareItemID: number;

  @Column({ type: 'bigint', name: 'CurrentShareRef' })
  currentShareRef: number;

  @Column({ type: 'bigint', name: 'ContractRef' })
  contractRef: number;

  @Column({ type: 'numeric', name: 'LongTermBalance' })
  longTermBalance: number;

  @Column({ type: 'numeric', name: 'ShortTermBalance' })
  shortTermBalance: number;

  @Column({ type: 'numeric', name: 'CurrentAmount' })
  currentAmount: number;

  @Column({ type: 'integer', name: 'ShareCount' })
  shareCount: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}