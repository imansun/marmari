import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransformedSalesPolicyResult' })
export class LegacyTransformedSalesPolicyResult {
  @PrimaryColumn({ type: 'bigint', name: 'TransformedSalesPolicyResultID' })
  transformedSalesPolicyResultID: number;

  @Column({ type: 'bigint', name: 'EntityRelationRef' })
  entityRelationRef: number;

  @Column({ type: 'integer', name: 'SourceType' })
  sourceType: number;

  @Column({ type: 'integer', name: 'TargetType' })
  targetType: number;

  @Column({ type: 'bigint', name: 'SourceRef' })
  sourceRef: number;

  @Column({ type: 'bigint', name: 'TargetRef' })
  targetRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRowRef', nullable: true })
  businessPolicyConditionRowRef: number | null;

  @Column({ type: 'numeric', name: 'Value' })
  value: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}