import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReplicationConflict' })
export class LegacyReplicationConflict {
  @PrimaryColumn({ type: 'bigint', name: 'SequenceID' })
  sequenceID: number;

  @Column({ type: 'bigint', name: 'IncomingEventSequenceID', nullable: true })
  incomingEventSequenceID: number | null;

  @Column({ type: 'timestamp without time zone', name: 'Date', nullable: true })
  date: Date | null;

  @Column({ type: 'character varying', name: 'Key' })
  key: string;

  @Column({ type: 'character varying', name: 'Message' })
  message: string;

  @Column({ type: 'character varying', name: 'ExtraData', nullable: true })
  extraData: string | null;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

}