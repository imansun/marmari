import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BusinessPolicyTargetEntity' })
export class LegacyBusinessPolicyTargetEntity {
  @PrimaryColumn({ type: 'bigint', name: 'BusinessPolicyTargetEntityID' })
  businessPolicyTargetEntityID: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'character varying', name: 'ComponentName' })
  componentName: string;

  @Column({ type: 'character varying', name: 'EntityName' })
  entityName: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}