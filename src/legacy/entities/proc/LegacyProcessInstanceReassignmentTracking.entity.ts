import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessInstanceReassignmentTracking' })
export class LegacyProcessInstanceReassignmentTracking {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessInstanceReassignmentTrackingID' })
  processInstanceReassignmentTrackingID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'ExtraDescription', nullable: true })
  extraDescription: string | null;

  @Column({ type: 'bigint', name: 'ProcessInstanceTaskDeliveryRef' })
  processInstanceTaskDeliveryRef: number;

  @Column({ type: 'bigint', name: 'ProcessInstanceTaskRef' })
  processInstanceTaskRef: number;

  @Column({ type: 'bigint', name: 'PrimaryPartyRef' })
  primaryPartyRef: number;

  @Column({ type: 'bigint', name: 'AssigneePartyRef' })
  assigneePartyRef: number;

  @Column({ type: 'bigint', name: 'AssignedPartyRef' })
  assignedPartyRef: number;

  @Column({ type: 'timestamp without time zone', name: 'AssignmentTime' })
  assignmentTime: Date;

}