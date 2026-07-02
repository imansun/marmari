import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractReceiptStep' })
export class LegacyContractReceiptStep {
  @PrimaryColumn({ type: 'bigint', name: 'ContractReceiptStepID' })
  contractReceiptStepID: number;

  @Column({ type: 'bigint', name: 'ContractRef' })
  contractRef: number;

  @Column({ type: 'integer', name: 'ReceiptTurn' })
  receiptTurn: number;

  @Column({ type: 'numeric', name: 'PrincipalAmount' })
  principalAmount: number;

  @Column({ type: 'numeric', name: 'InitialInterestAmount' })
  initialInterestAmount: number;

  @Column({ type: 'character varying', name: 'InterestRate', nullable: true })
  interestRate: string | null;

  @Column({ type: 'boolean', name: 'Received' })
  received: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}