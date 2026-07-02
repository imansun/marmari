import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BusinessPolicyGroupItem' })
export class LegacyBusinessPolicyGroupItem {
  @PrimaryColumn({ type: 'bigint', name: 'BusinessPolicyGroupItemID' })
  businessPolicyGroupItemID: number;

  @Column({ type: 'bigint', name: 'ParentBusinessPolicyGroupRef' })
  parentBusinessPolicyGroupRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyGroupRef', nullable: true })
  businessPolicyGroupRef: number | null;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef', nullable: true })
  businessPolicyRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}