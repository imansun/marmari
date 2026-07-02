import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InsurancePolicyContextItem' })
export class LegacyInsurancePolicyContextItem {
  @PrimaryColumn({ type: 'bigint', name: 'InsurancePolicyContextItemID' })
  insurancePolicyContextItemID: number;

  @Column({ type: 'bigint', name: 'InsuranceRef' })
  insuranceRef: number;

  @Column({ type: 'integer', name: 'ItemType' })
  itemType: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef', nullable: true })
  businessPolicyRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}