import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProformaPolicyResult' })
export class LegacyProformaPolicyResult {
  @PrimaryColumn({ type: 'bigint', name: 'ProformaPolicyResultID' })
  proformaPolicyResultID: number;

  @Column({ type: 'bigint', name: 'ProformaRef' })
  proformaRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRef' })
  businessPolicyConditionRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRowRef' })
  businessPolicyConditionRowRef: number;

  @Column({ type: 'text', name: 'Value' })
  value: string;

  @Column({ type: 'numeric', name: 'Price', nullable: true })
  price: number | null;

  @Column({ type: 'integer', name: 'VersionNumber' })
  versionNumber: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}