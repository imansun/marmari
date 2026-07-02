import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractPolicyResult' })
export class LegacyContractPolicyResult {
  @PrimaryColumn({ type: 'bigint', name: 'ContractPolicyResultID' })
  contractPolicyResultID: number;

  @Column({ type: 'bigint', name: 'ContractRef' })
  contractRef: number;

  @Column({ type: 'integer', name: 'RowIndex' })
  rowIndex: number;

  @Column({ type: 'text', name: 'Value' })
  value: string;

  @Column({ type: 'bigint', name: 'ContractItemRef', nullable: true })
  contractItemRef: number | null;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRef' })
  businessPolicyConditionRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRowRef' })
  businessPolicyConditionRowRef: number;

  @Column({ type: 'numeric', name: 'Price', nullable: true })
  price: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}