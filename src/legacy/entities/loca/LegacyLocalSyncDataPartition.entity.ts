import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LocalSyncDataPartition' })
export class LegacyLocalSyncDataPartition {
  @PrimaryColumn({ type: 'bigint', name: 'LocalSyncDataPartitionID' })
  localSyncDataPartitionID: number;

  @Column({ type: 'bigint', name: 'StartEntityID' })
  startEntityID: number;

  @Column({ type: 'bigint', name: 'EndEntityID' })
  endEntityID: number;

  @Column({ type: 'character varying', name: 'EntityName' })
  entityName: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}