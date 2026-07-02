import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RecordMap' })
export class LegacyRecordMap {
  @PrimaryColumn({ type: 'bigint', name: 'RecordMapID' })
  recordMapID: number;

  @Column({ type: 'bigint', name: 'RecordID' })
  recordID: number;

  @Column({ type: 'bigint', name: 'RemoteID' })
  remoteID: number;

  @Column({ type: 'character varying', name: 'Entity' })
  entity: string;

}