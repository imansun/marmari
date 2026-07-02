import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TmpCardLastSync' })
export class LegacyTmpCardLastSync {
  @PrimaryColumn({ type: 'bigint', name: 'TmpCardLastSyncID' })
  tmpCardLastSyncID: number;

  @Column({ type: 'character varying', name: 'CardNumber' })
  cardNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'LastSyncDate', nullable: true })
  lastSyncDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}