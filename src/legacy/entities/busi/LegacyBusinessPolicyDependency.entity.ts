import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BusinessPolicyDependency' })
export class LegacyBusinessPolicyDependency {
  @PrimaryColumn({ type: 'bigint', name: 'BusinessPolicyDependencyID' })
  businessPolicyDependencyID: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'DependentBusinessPolicyRef' })
  dependentBusinessPolicyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}