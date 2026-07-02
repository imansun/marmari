import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessUpdateHistory' })
export class LegacyProcessUpdateHistory {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessUpdateHistoryID' })
  processUpdateHistoryID: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationTime' })
  creationTime: Date;

  @Column({ type: 'integer', name: 'VersionNumber' })
  versionNumber: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}