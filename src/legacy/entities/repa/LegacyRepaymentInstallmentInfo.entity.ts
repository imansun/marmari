import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RepaymentInstallmentInfo' })
export class LegacyRepaymentInstallmentInfo {
  @PrimaryColumn({ type: 'bigint', name: 'RepaymentInstallmentInfoID' })
  repaymentInstallmentInfoID: number;

  @Column({ type: 'bigint', name: 'RepaymentRef' })
  repaymentRef: number;

  @Column({ type: 'bigint', name: 'InstallmentRef' })
  installmentRef: number;

  @Column({ type: 'numeric', name: 'PaidAmount', nullable: true })
  paidAmount: number | null;

  @Column({ type: 'numeric', name: 'PaidInterest', nullable: true })
  paidInterest: number | null;

  @Column({ type: 'numeric', name: 'RewardAccount', nullable: true })
  rewardAccount: number | null;

  @Column({ type: 'numeric', name: 'PaidCalculatedInterestAllowance', nullable: true })
  paidCalculatedInterestAllowance: number | null;

  @Column({ type: 'numeric', name: 'PaidMaturedCalculatedInterestAllowance' })
  paidMaturedCalculatedInterestAllowance: number;

  @Column({ type: 'numeric', name: 'PaidNotMaturedCalculatedInterestAllowance' })
  paidNotMaturedCalculatedInterestAllowance: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}