import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssignmentItemPolicyResult' })
export class LegacyAssignmentItemPolicyResult {
  @PrimaryColumn({ type: 'bigint', name: 'AssignmentItemPolicyResultID' })
  assignmentItemPolicyResultID: number;

  @Column({ type: 'bigint', name: 'AssignmentPolicyResultRef', nullable: true })
  assignmentPolicyResultRef: number | null;

  @Column({ type: 'bigint', name: 'AssignmentItemChangeRef' })
  assignmentItemChangeRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRef' })
  businessPolicyConditionRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRowRef' })
  businessPolicyConditionRowRef: number;

  @Column({ type: 'text', name: 'Value' })
  value: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}