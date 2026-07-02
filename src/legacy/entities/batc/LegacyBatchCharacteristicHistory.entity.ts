import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BatchCharacteristicHistory' })
export class LegacyBatchCharacteristicHistory {
  @PrimaryColumn({ type: 'bigint', name: 'BatchCharacteristicHistoryID' })
  batchCharacteristicHistoryID: number;

  @Column({ type: 'bigint', name: 'BatchHistoryRef' })
  batchHistoryRef: number;

  @Column({ type: 'bigint', name: 'BatchCharacteristicRef' })
  batchCharacteristicRef: number;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}