import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SettlementMethodGroupItem' })
export class LegacySettlementMethodGroupItem {
  @PrimaryColumn({ type: 'bigint', name: 'SettlementMethodGroupItemID' })
  settlementMethodGroupItemID: number;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'bigint', name: 'SettlementMethodGroupRef' })
  settlementMethodGroupRef: number;

  @Column({ type: 'bigint', name: 'SettlementMethodRef' })
  settlementMethodRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}