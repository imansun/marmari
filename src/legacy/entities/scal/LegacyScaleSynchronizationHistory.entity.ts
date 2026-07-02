import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ScaleSynchronizationHistory' })
export class LegacyScaleSynchronizationHistory {
  @PrimaryColumn({ type: 'bigint', name: 'ScaleSynchronizationHistoryID' })
  scaleSynchronizationHistoryID: number;

  @Column({ type: 'timestamp without time zone', name: 'LastSyncTime' })
  lastSyncTime: Date;

  @Column({ type: 'character varying', name: 'LanId', nullable: true })
  lanId: string | null;

  @Column({ type: 'character varying', name: 'SynchronizerKey', nullable: true })
  synchronizerKey: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}