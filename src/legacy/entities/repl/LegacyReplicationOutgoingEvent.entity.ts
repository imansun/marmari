import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReplicationOutgoingEvent' })
export class LegacyReplicationOutgoingEvent {
  @PrimaryColumn({ type: 'bigint', name: 'SequenceID' })
  sequenceID: number;

  @Column({ type: 'bigint', name: 'ParentSequenceID', nullable: true })
  parentSequenceID: number | null;

  @Column({ type: 'bigint', name: 'RootSequenceID', nullable: true })
  rootSequenceID: number | null;

  @Column({ type: 'character varying', name: 'Source' })
  source: string;

  @Column({ type: 'character varying', name: 'ID' })
  iD: string;

  @Column({ type: 'character varying', name: 'Content' })
  content: string;

  @Column({ type: 'character varying', name: 'OriginNode' })
  originNode: string;

  @Column({ type: 'character varying', name: 'OperationAction', nullable: true })
  operationAction: string | null;

  @Column({ type: 'character varying', name: 'Transaction' })
  transaction: string;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

}