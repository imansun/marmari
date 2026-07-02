import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BusinessPolicyEnforcementProcedureRow' })
export class LegacyBusinessPolicyEnforcementProcedureRow {
  @PrimaryColumn({ type: 'bigint', name: 'BusinessPolicyEnforcementProcedureRowID' })
  businessPolicyEnforcementProcedureRowID: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyEnforcementProcedureRef' })
  businessPolicyEnforcementProcedureRef: number;

  @Column({ type: 'character varying', name: 'PolicyType', nullable: true })
  policyType: string | null;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef', nullable: true })
  businessPolicyRef: number | null;

  @Column({ type: 'integer', name: 'ShrinkMethod', nullable: true })
  shrinkMethod: number | null;

  @Column({ type: 'character varying', name: 'ShrinkBaseProperty', nullable: true })
  shrinkBaseProperty: string | null;

  @Column({ type: 'integer', name: 'ConflictResolutionPolicy' })
  conflictResolutionPolicy: number;

  @Column({ type: 'boolean', name: 'Inherited' })
  inherited: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}