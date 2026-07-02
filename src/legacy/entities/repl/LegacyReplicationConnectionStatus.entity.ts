import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReplicationConnectionStatus' })
export class LegacyReplicationConnectionStatus {
  @PrimaryColumn({ type: 'bigint', name: 'SequenceID' })
  sequenceID: number;

  @Column({ type: 'character varying', name: 'NodeName' })
  nodeName: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'boolean', name: 'IsInput' })
  isInput: boolean;

}