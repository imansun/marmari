import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BusinessRuleActionExecutionLog' })
export class LegacyBusinessRuleActionExecutionLog {
  @PrimaryColumn({ type: 'bigint', name: 'BusinessRuleActionExecutionLogID' })
  businessRuleActionExecutionLogID: number;

  @Column({ type: 'bigint', name: 'BusinessEventRuleActionRef', nullable: true })
  businessEventRuleActionRef: number | null;

  @Column({ type: 'character varying', name: 'Name', nullable: true })
  name: string | null;

  @Column({ type: 'character varying', name: 'RuleResult' })
  ruleResult: string;

  @Column({ type: 'bigint', name: 'RuleDuration' })
  ruleDuration: number;

  @Column({ type: 'character varying', name: 'ActionResult', nullable: true })
  actionResult: string | null;

  @Column({ type: 'bigint', name: 'ActionDuration', nullable: true })
  actionDuration: number | null;

  @Column({ type: 'timestamp without time zone', name: 'StartTime' })
  startTime: Date;

}