import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MaterialControlPolicyPart' })
export class LegacyMaterialControlPolicyPart {
  @PrimaryColumn({ type: 'bigint', name: 'MaterialControlPolicyPartID' })
  materialControlPolicyPartID: number;

  @Column({ type: 'bigint', name: 'MaterialControlPolicyRef' })
  materialControlPolicyRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'boolean', name: 'UseSingleGroup', default: false })
  useSingleGroup: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}