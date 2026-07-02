import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReplicationIncomingPackage' })
export class LegacyReplicationIncomingPackage {
  @PrimaryColumn({ type: 'uuid', name: 'ID' })
  iD: string;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'character varying', name: 'OriginNode' })
  originNode: string;

  @Column({ type: 'character varying', name: 'SenderNode' })
  senderNode: string;

  @Column({ type: 'bigint', name: 'StartSequenceID' })
  startSequenceID: number;

  @Column({ type: 'bigint', name: 'EndSequenceID' })
  endSequenceID: number;

  @Column({ type: 'bytea', name: 'Content' })
  content: Buffer;

  @Column({ type: 'boolean', name: 'IsProcessed' })
  isProcessed: boolean;

  @Column({ type: 'timestamp without time zone', name: 'ProcessDate', nullable: true })
  processDate: Date | null;

}