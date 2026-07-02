import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OfflineDeletedRecords' })
export class LegacyOfflineDeletedRecords {
  @PrimaryColumn({ type: 'bigint', name: 'OfflineDeletedRecordsID' })
  offlineDeletedRecordsID: number;

  @Column({ type: 'character varying', name: 'TableName' })
  tableName: string;

  @Column({ type: 'bigint', name: 'RecordID' })
  recordID: number;

  @Column({ type: 'bigint', name: 'ParentRecordID', nullable: true })
  parentRecordID: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

}