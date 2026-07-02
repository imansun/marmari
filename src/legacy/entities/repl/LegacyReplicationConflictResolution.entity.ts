import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReplicationConflictResolution' })
export class LegacyReplicationConflictResolution {
  @PrimaryColumn({ type: 'bigint', name: 'SequenceID' })
  sequenceID: number;

  @Column({ type: 'bigint', name: 'ReplicationConflictSequenceID', nullable: true })
  replicationConflictSequenceID: number | null;

  @Column({ type: 'character varying', name: 'Key', nullable: true })
  key: string | null;

  @Column({ type: 'character varying', name: 'Parameters', nullable: true })
  parameters: string | null;

  @Column({ type: 'character varying', name: 'Data', nullable: true })
  data: string | null;

  @Column({ type: 'boolean', name: 'IsSelected' })
  isSelected: boolean;

}