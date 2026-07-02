import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidGate' })
export class LegacyRfidGate {
  @PrimaryColumn({ type: 'bigint', name: 'RfidGateID' })
  rfidGateID: number;

  @Column({ type: 'integer', name: 'RfidSiteCode' })
  rfidSiteCode: number;

  @Column({ type: 'integer', name: 'Code' })
  code: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'MinimumInterval' })
  minimumInterval: number;

  @Column({ type: 'boolean', name: 'Enabled' })
  enabled: boolean;

  @Column({ type: 'integer', name: 'SyncStatusCode' })
  syncStatusCode: number;

  @Column({ type: 'boolean', name: 'Deleted' })
  deleted: boolean;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

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