import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesPersonRestrictionRuleItem' })
export class LegacySalesPersonRestrictionRuleItem {
  @PrimaryColumn({ type: 'bigint', name: 'SalesPersonRestrictionRuleItemID' })
  salesPersonRestrictionRuleItemID: number;

  @Column({ type: 'bigint', name: 'SalesPersonRestrictionRuleRef' })
  salesPersonRestrictionRuleRef: number;

  @Column({ type: 'bigint', name: 'BrokerRef', nullable: true })
  brokerRef: number | null;

  @Column({ type: 'bigint', name: 'SalesGroupRef', nullable: true })
  salesGroupRef: number | null;

  @Column({ type: 'character varying', name: 'Category', nullable: true })
  category: string | null;

  @Column({ type: 'character varying', name: 'LogicalResourceKey', nullable: true })
  logicalResourceKey: string | null;

  @Column({ type: 'integer', name: 'EntityCode', nullable: true })
  entityCode: number | null;

  @Column({ type: 'bigint', name: 'EntityRef', nullable: true })
  entityRef: number | null;

  @Column({ type: 'bigint', name: 'EntityGroupRef', nullable: true })
  entityGroupRef: number | null;

  @Column({ type: 'boolean', name: 'HasAccess', nullable: true })
  hasAccess: boolean | null;

  @Column({ type: 'numeric', name: 'NumberValue', nullable: true })
  numberValue: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}