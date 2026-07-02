import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CollectorItem' })
export class LegacyCollectorItem {
  @PrimaryColumn({ type: 'bigint', name: 'CollectorItemID' })
  collectorItemID: number;

  @Column({ type: 'bigint', name: 'CollectorRef' })
  collectorRef: number;

  @Column({ type: 'bigint', name: 'SettlementPlaceRef' })
  settlementPlaceRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}