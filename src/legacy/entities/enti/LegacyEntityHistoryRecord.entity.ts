import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EntityHistoryRecord' })
export class LegacyEntityHistoryRecord {
  @PrimaryColumn({ type: 'bigint', name: 'EntityHistoryRecordID' })
  entityHistoryRecordID: number;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'bigint', name: 'RecordID' })
  recordID: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'integer', name: 'Action' })
  action: number;

  @Column({ type: 'integer', name: 'SourceState', nullable: true })
  sourceState: number | null;

  @Column({ type: 'integer', name: 'TargetState', nullable: true })
  targetState: number | null;

  @Column({ type: 'integer', name: 'VersionAfter', nullable: true })
  versionAfter: number | null;

  @Column({ type: 'bigint', name: 'UserID' })
  userID: number;

  @Column({ type: 'text', name: 'Details', nullable: true })
  details: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}