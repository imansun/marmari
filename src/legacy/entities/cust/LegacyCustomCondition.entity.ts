import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomCondition' })
export class LegacyCustomCondition {
  @PrimaryColumn({ type: 'bigint', name: 'CustomConditionID' })
  customConditionID: number;

  @Column({ type: 'bigint', name: 'SecurityPolicyRef' })
  securityPolicyRef: number;

  @Column({ type: 'character varying', name: 'ControlTypeName' })
  controlTypeName: string;

  @Column({ type: 'text', name: 'Condition' })
  condition: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}