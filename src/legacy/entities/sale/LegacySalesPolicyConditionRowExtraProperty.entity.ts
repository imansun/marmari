import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesPolicyConditionRowExtraProperty' })
export class LegacySalesPolicyConditionRowExtraProperty {
  @PrimaryColumn({ type: 'bigint', name: 'SalesPolicyConditionRowExtraPropertyID' })
  salesPolicyConditionRowExtraPropertyID: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRef' })
  businessPolicyConditionRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRowRef' })
  businessPolicyConditionRowRef: number;

  @Column({ type: 'numeric', name: 'ToleranceMinValue', nullable: true })
  toleranceMinValue: number | null;

  @Column({ type: 'numeric', name: 'ToleranceMaxValue', nullable: true })
  toleranceMaxValue: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}