import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReplicationOutgoingPackageTarget' })
export class LegacyReplicationOutgoingPackageTarget {
  @PrimaryColumn({ type: 'uuid', name: 'PackageID' })
  packageID: string;

  @PrimaryColumn({ type: 'character varying', name: 'TargetNode' })
  targetNode: string;

  @Column({ type: 'boolean', name: 'IsProcessed' })
  isProcessed: boolean;

  @Column({ type: 'timestamp without time zone', name: 'ProcessDate', nullable: true })
  processDate: Date | null;

}