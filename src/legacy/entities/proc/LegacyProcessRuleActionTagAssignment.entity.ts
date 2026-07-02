import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessRuleActionTagAssignment' })
export class LegacyProcessRuleActionTagAssignment {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessRuleActionTagAssignmentID' })
  processRuleActionTagAssignmentID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'RuleActionRef' })
  ruleActionRef: number;

  @Column({ type: 'bigint', name: 'TagRef' })
  tagRef: number;

}