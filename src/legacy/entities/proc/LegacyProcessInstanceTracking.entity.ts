import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessInstanceTracking' })
export class LegacyProcessInstanceTracking {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessInstanceTrackingID' })
  processInstanceTrackingID: number;

  @Column({ type: 'uuid', name: 'InstanceId' })
  instanceId: string;

  @Column({ type: 'uuid', name: 'ParentInstanceId', nullable: true })
  parentInstanceId: string | null;

  @Column({ type: 'uuid', name: 'RootInstanceId', nullable: true })
  rootInstanceId: string | null;

  @Column({ type: 'character varying', name: 'InstanceName', nullable: true })
  instanceName: string | null;

  @Column({ type: 'timestamp without time zone', name: 'Start' })
  start: Date;

  @Column({ type: 'timestamp without time zone', name: 'End', nullable: true })
  end: Date | null;

  @Column({ type: 'bigint', name: 'ProcessDefinitionVersionRef' })
  processDefinitionVersionRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}