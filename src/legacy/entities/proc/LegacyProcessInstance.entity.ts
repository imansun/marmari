import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessInstance' })
export class LegacyProcessInstance {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessInstanceID' })
  processInstanceID: number;

  @Column({ type: 'uuid', name: 'InstanceId' })
  instanceId: string;

  @Column({ type: 'bigint', name: 'ProcessDefinitionVersionRef' })
  processDefinitionVersionRef: number;

  @Column({ type: 'character varying', name: 'InstanceData' })
  instanceData: string;

  @Column({ type: 'character varying', name: 'BookmarkName' })
  bookmarkName: string;

  @Column({ type: 'timestamp without time zone', name: 'LastUpdate' })
  lastUpdate: Date;

  @Column({ type: 'integer', name: 'VersionNumber', nullable: true })
  versionNumber: number | null;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'IdentityName' })
  identityName: string;

  @Column({ type: 'character varying', name: 'BookmarkActivityName' })
  bookmarkActivityName: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'uuid', name: 'OperationUniqueId' })
  operationUniqueId: string;

  @Column({ type: 'timestamp without time zone', name: 'NextRetryTime', nullable: true })
  nextRetryTime: Date | null;

  @Column({ type: 'integer', name: 'RetryCount', default: 0 })
  retryCount: number;

}