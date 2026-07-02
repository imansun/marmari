import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LocalServerStatus' })
export class LegacyLocalServerStatus {
  @PrimaryColumn({ type: 'bigint', name: 'LocalServerStatusID' })
  localServerStatusID: number;

  @Column({ type: 'integer', name: 'Identifier' })
  identifier: number;

  @Column({ type: 'character varying', name: 'HostName' })
  hostName: string;

  @Column({ type: 'character varying', name: 'IpAddress' })
  ipAddress: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'timestamp without time zone', name: 'LastSyncDate' })
  lastSyncDate: Date;

  @Column({ type: 'integer', name: 'SyncInterval' })
  syncInterval: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}