import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ToDoTask' })
export class LegacyToDoTask {
  @PrimaryColumn({ type: 'bigint', name: 'ToDoTaskID' })
  toDoTaskID: number;

  @Column({ type: 'integer', name: 'EntityType' })
  entityType: number;

  @Column({ type: 'bigint', name: 'EntityRef' })
  entityRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'boolean', name: 'Read' })
  read: boolean;

  @Column({ type: 'bigint', name: 'ReceiverRef' })
  receiverRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Deadline', nullable: true })
  deadline: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}