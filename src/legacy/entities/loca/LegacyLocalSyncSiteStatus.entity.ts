import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LocalSyncSiteStatus' })
export class LegacyLocalSyncSiteStatus {
  @PrimaryColumn({ type: 'bigint', name: 'LocalSyncSiteStatusID' })
  localSyncSiteStatusID: number;

  @Column({ type: 'bigint', name: 'LocalSyncDataPartitionRef' })
  localSyncDataPartitionRef: number;

  @Column({ type: 'bigint', name: 'RfidSiteRef' })
  rfidSiteRef: number;

  @Column({ type: 'boolean', name: 'Synced' })
  synced: boolean;

  @Column({ type: 'integer', name: 'SyncTryCount', default: 0 })
  syncTryCount: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}