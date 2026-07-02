import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BatchHistory' })
export class LegacyBatchHistory {
  @PrimaryColumn({ type: 'bigint', name: 'BatchHistoryID' })
  batchHistoryID: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'BatchRef' })
  batchRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

}