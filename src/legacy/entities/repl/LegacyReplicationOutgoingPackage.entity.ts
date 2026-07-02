import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReplicationOutgoingPackage' })
export class LegacyReplicationOutgoingPackage {
  @PrimaryColumn({ type: 'uuid', name: 'ID' })
  iD: string;

  @Column({ type: 'uuid', name: 'GlobalID' })
  globalID: string;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'character varying', name: 'OriginNode' })
  originNode: string;

  @Column({ type: 'bigint', name: 'StartSequenceID' })
  startSequenceID: number;

  @Column({ type: 'bigint', name: 'EndSequenceID' })
  endSequenceID: number;

  @Column({ type: 'bytea', name: 'Content' })
  content: Buffer;

}