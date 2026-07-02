import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesPersonRestrictionRule' })
export class LegacySalesPersonRestrictionRule {
  @PrimaryColumn({ type: 'bigint', name: 'SalesPersonRestrictionRuleID' })
  salesPersonRestrictionRuleID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'State' })
  state: number;

}