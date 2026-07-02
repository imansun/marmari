import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessServerMessageQueue' })
export class LegacyProcessServerMessageQueue {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessServerMessageQueueID' })
  processServerMessageQueueID: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationTime' })
  creationTime: Date;

  @Column({ type: 'character varying', name: 'TopicSubscription' })
  topicSubscription: string;

  @Column({ type: 'character varying', name: 'Data' })
  data: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'uuid', name: 'InstanceId', nullable: true })
  instanceId: string | null;

  @Column({ type: 'uuid', name: 'BookmarkId', nullable: true })
  bookmarkId: string | null;

  @Column({ type: 'bigint', name: 'VersionDefinitionId', nullable: true })
  versionDefinitionId: number | null;

}