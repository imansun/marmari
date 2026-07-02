import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReplicationTrackedTable' })
export class LegacyReplicationTrackedTable {
  @PrimaryColumn({ type: 'character varying', name: 'TableName' })
  tableName: string;

  @PrimaryColumn({ type: 'integer', name: 'TrackVersion' })
  trackVersion: number;

  @Column({ type: 'timestamp without time zone', name: 'TrackStartDate' })
  trackStartDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'TrackEndDate', nullable: true })
  trackEndDate: Date | null;

  @Column({ type: 'character varying', name: 'CaptureInstanceName' })
  captureInstanceName: string;

  @Column({ type: 'character varying', name: 'TableMetadata' })
  tableMetadata: string;

}