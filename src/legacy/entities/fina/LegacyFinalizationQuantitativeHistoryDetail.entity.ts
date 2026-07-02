import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FinalizationQuantitativeHistoryDetail' })
export class LegacyFinalizationQuantitativeHistoryDetail {
  @PrimaryColumn({ type: 'bigint', name: 'FinalizationQuantitativeHistoryDetailID' })
  finalizationQuantitativeHistoryDetailID: number;

  @Column({ type: 'bigint', name: 'FinalizationQuantitativeHistoryRef' })
  finalizationQuantitativeHistoryRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}