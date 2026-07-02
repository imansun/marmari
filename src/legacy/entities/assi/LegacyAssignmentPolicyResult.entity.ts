import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssignmentPolicyResult' })
export class LegacyAssignmentPolicyResult {
  @PrimaryColumn({ type: 'bigint', name: 'AssignmentPolicyResultID' })
  assignmentPolicyResultID: number;

  @Column({ type: 'bigint', name: 'AssignmentRef' })
  assignmentRef: number;

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