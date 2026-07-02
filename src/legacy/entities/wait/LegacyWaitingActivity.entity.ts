import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WaitingActivity' })
export class LegacyWaitingActivity {
  @PrimaryColumn({ type: 'bigint', name: 'WaitingActivityID' })
  waitingActivityID: number;

  @Column({ type: 'uuid', name: 'WorkflowGuid' })
  workflowGuid: string;

  @Column({ type: 'uuid', name: 'ActivityGuid' })
  activityGuid: string;

  @Column({ type: 'character varying', name: 'InterfaceEventArgType' })
  interfaceEventArgType: string;

  @Column({ type: 'character varying', name: 'ExpressionText' })
  expressionText: string;

  @Column({ type: 'character varying', name: 'ExpressionValue' })
  expressionValue: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'HandleAsyncronous', nullable: true })
  handleAsyncronous: boolean | null;

}