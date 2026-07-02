import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessInstanceTask' })
export class LegacyProcessInstanceTask {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessInstanceTaskID' })
  processInstanceTaskID: number;

  @Column({ type: 'uuid', name: 'InstanceId' })
  instanceId: string;

  @Column({ type: 'uuid', name: 'ActivityUniqueId' })
  activityUniqueId: string;

  @Column({ type: 'character varying', name: 'Context' })
  context: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'ProcessTitle', nullable: true })
  processTitle: string | null;

  @Column({ type: 'character varying', name: 'Action' })
  action: string;

  @Column({ type: 'character varying', name: 'Parameters', nullable: true })
  parameters: string | null;

  @Column({ type: 'integer', name: 'RelatedEntityCode', nullable: true })
  relatedEntityCode: number | null;

  @Column({ type: 'bigint', name: 'RelatedEntityID', nullable: true })
  relatedEntityID: number | null;

  @Column({ type: 'integer', name: 'AssignmentType' })
  assignmentType: number;

  @Column({ type: 'bigint', name: 'StructureRef', nullable: true })
  structureRef: number | null;

  @Column({ type: 'bigint', name: 'PersonRef', nullable: true })
  personRef: number | null;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'bigint', name: 'PositionRef', nullable: true })
  positionRef: number | null;

  @Column({ type: 'bigint', name: 'JobRef', nullable: true })
  jobRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationTime' })
  creationTime: Date;

  @Column({ type: 'timestamp without time zone', name: 'Deadline', nullable: true })
  deadline: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'CompletionTime', nullable: true })
  completionTime: Date | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsDelivered', nullable: true })
  isDelivered: boolean | null;

}