import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BusinessPolicyParameterAssociation' })
export class LegacyBusinessPolicyParameterAssociation {
  @PrimaryColumn({ type: 'bigint', name: 'BusinessPolicyParameterAssociationID' })
  businessPolicyParameterAssociationID: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyParameterRef' })
  businessPolicyParameterRef: number;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

}