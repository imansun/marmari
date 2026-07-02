import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BusinessPolicyEnforcementProcedureRowDependency' })
export class LegacyBusinessPolicyEnforcementProcedureRowDependency {
  @PrimaryColumn({ type: 'bigint', name: 'BusinessPolicyDependencyID' })
  businessPolicyDependencyID: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyEnforcementProcedureRef' })
  businessPolicyEnforcementProcedureRef: number;

  @Column({ type: 'bigint', name: 'DependantPolicyEnforcementProcedureRowRef' })
  dependantPolicyEnforcementProcedureRowRef: number;

  @Column({ type: 'bigint', name: 'DependencyPolicyEnforcementProcedureRowRef' })
  dependencyPolicyEnforcementProcedureRowRef: number;

  @Column({ type: 'boolean', name: 'IsNegative' })
  isNegative: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}