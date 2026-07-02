import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ControllingPolicyParameter' })
export class LegacyControllingPolicyParameter {
  @PrimaryColumn({ type: 'bigint', name: 'ControllingPolicyParameterID' })
  controllingPolicyParameterID: number;

  @Column({ type: 'bigint', name: 'ControllingPolicyRef' })
  controllingPolicyRef: number;

  @Column({ type: 'bigint', name: 'EntityGroupingRef', nullable: true })
  entityGroupingRef: number | null;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'ComparisonOperator' })
  comparisonOperator: number;

  @Column({ type: 'integer', name: 'CombinationOperator' })
  combinationOperator: number;

  @Column({ type: 'integer', name: 'RowOrder' })
  rowOrder: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}