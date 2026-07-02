import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Installment' })
export class LegacyInstallment {
  @PrimaryColumn({ type: 'bigint', name: 'InstallmentID' })
  installmentID: number;

  @Column({ type: 'bigint', name: 'ContractRef' })
  contractRef: number;

  @Column({ type: 'integer', name: 'ShareNumber' })
  shareNumber: number;

  @Column({ type: 'timestamp without time zone', name: 'DueDate' })
  dueDate: Date;

  @Column({ type: 'numeric', name: 'ShareAmount' })
  shareAmount: number;

  @Column({ type: 'numeric', name: 'PaidAmount' })
  paidAmount: number;

  @Column({ type: 'numeric', name: 'UnPaidAmount' })
  unPaidAmount: number;

  @Column({ type: 'numeric', name: 'InterestShare' })
  interestShare: number;

  @Column({ type: 'numeric', name: 'PaidInterest' })
  paidInterest: number;

  @Column({ type: 'numeric', name: 'UnPaidInterest' })
  unPaidInterest: number;

  @Column({ type: 'numeric', name: 'CalculatedInterestAllowance', nullable: true })
  calculatedInterestAllowance: number | null;

  @Column({ type: 'numeric', name: 'CalculatedMaturedInterestAllowance' })
  calculatedMaturedInterestAllowance: number;

  @Column({ type: 'numeric', name: 'CalculatedNotMaturedInterestAllowance' })
  calculatedNotMaturedInterestAllowance: number;

  @Column({ type: 'numeric', name: 'CalculatedInterest' })
  calculatedInterest: number;

  @Column({ type: 'numeric', name: 'TotalAmount' })
  totalAmount: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'ShareState' })
  shareState: number;

  @Column({ type: 'integer', name: 'InterestExpenseState' })
  interestExpenseState: number;

  @Column({ type: 'boolean', name: 'IsDeploymentCalculated' })
  isDeploymentCalculated: boolean;

  @Column({ type: 'numeric', name: 'DeploymentCalculatedMaturedInterestAllowance' })
  deploymentCalculatedMaturedInterestAllowance: number;

  @Column({ type: 'numeric', name: 'DeploymentCalculatedNotMaturedInterestAllowance' })
  deploymentCalculatedNotMaturedInterestAllowance: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}