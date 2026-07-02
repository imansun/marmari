import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FailedProcessInstance' })
export class LegacyFailedProcessInstance {
  @PrimaryColumn({ type: 'bigint', name: 'FailedProcessInstanceId' })
  failedProcessInstanceId: number;

  @Column({ type: 'uuid', name: 'InstanceId' })
  instanceId: string;

  @Column({ type: 'character varying', name: 'Topic' })
  topic: string;

  @Column({ type: 'character varying', name: 'MessageAttributes' })
  messageAttributes: string;

  @Column({ type: 'character varying', name: 'Operation' })
  operation: string;

  @Column({ type: 'integer', name: 'RelatedEntityCode' })
  relatedEntityCode: number;

  @Column({ type: 'bigint', name: 'RelatedEntityID' })
  relatedEntityID: number;

  @Column({ type: 'boolean', name: 'IsDeleted' })
  isDeleted: boolean;

}