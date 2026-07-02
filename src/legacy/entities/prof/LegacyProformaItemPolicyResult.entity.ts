import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProformaItemPolicyResult' })
export class LegacyProformaItemPolicyResult {
  @PrimaryColumn({ type: 'bigint', name: 'ProformaItemPolicyResultID' })
  proformaItemPolicyResultID: number;

  @Column({ type: 'bigint', name: 'ProformaItemRef' })
  proformaItemRef: number;

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

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'ProformaPolicyResultRef', nullable: true })
  proformaPolicyResultRef: number | null;

}