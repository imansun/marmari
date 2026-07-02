import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FlowMeterAssignmentItem' })
export class LegacyFlowMeterAssignmentItem {
  @PrimaryColumn({ type: 'bigint', name: 'FlowMeterAssignmentItemID' })
  flowMeterAssignmentItemID: number;

  @Column({ type: 'bigint', name: 'FlowMeterRef' })
  flowMeterRef: number;

  @Column({ type: 'integer', name: 'AssignmentItemType' })
  assignmentItemType: number;

  @Column({ type: 'bigint', name: 'AssignmentItemRef' })
  assignmentItemRef: number;

  @Column({ type: 'timestamp without time zone', name: 'ActivationDate' })
  activationDate: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}