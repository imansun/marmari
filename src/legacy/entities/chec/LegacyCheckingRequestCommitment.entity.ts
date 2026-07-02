import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CheckingRequestCommitment' })
export class LegacyCheckingRequestCommitment {
  @PrimaryColumn({ type: 'bigint', name: 'CheckingRequestCommitmentID' })
  checkingRequestCommitmentID: number;

  @Column({ type: 'bigint', name: 'CheckingRequestRef' })
  checkingRequestRef: number;

  @Column({ type: 'bigint', name: 'BudgetEntityDefinitionRef' })
  budgetEntityDefinitionRef: number;

  @Column({ type: 'bigint', name: 'BudgetEntityItemRef' })
  budgetEntityItemRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}