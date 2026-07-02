import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractPolicy' })
export class LegacyContractPolicy {
  @PrimaryColumn({ type: 'bigint', name: 'ContractPolicyID' })
  contractPolicyID: number;

  @Column({ type: 'bigint', name: 'ContractRef' })
  contractRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}