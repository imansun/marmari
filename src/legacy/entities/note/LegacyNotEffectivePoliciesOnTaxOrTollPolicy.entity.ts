import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NotEffectivePoliciesOnTaxOrTollPolicy' })
export class LegacyNotEffectivePoliciesOnTaxOrTollPolicy {
  @PrimaryColumn({ type: 'bigint', name: 'NotEffectivePoliciesOnTaxOrTollPolicyID' })
  notEffectivePoliciesOnTaxOrTollPolicyID: number;

  @Column({ type: 'bigint', name: 'PolicyRef' })
  policyRef: number;

  @Column({ type: 'bigint', name: 'NotEffectivePoliciesOnTaxOrTollRef' })
  notEffectivePoliciesOnTaxOrTollRef: number;

}