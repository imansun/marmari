import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessRuleActionAssignment' })
export class LegacyProcessRuleActionAssignment {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessRuleActionAssignmentID' })
  processRuleActionAssignmentID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'boolean', name: 'Stop' })
  stop: boolean;

  @Column({ type: 'bigint', name: 'RuleRef' })
  ruleRef: number;

  @Column({ type: 'bigint', name: 'ActionRef' })
  actionRef: number;

}