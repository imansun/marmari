import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MaturedSharedInterestAllowanceItem' })
export class LegacyMaturedSharedInterestAllowanceItem {
  @PrimaryColumn({ type: 'bigint', name: 'MaturedSharedInterestAllowanceItemID' })
  maturedSharedInterestAllowanceItemID: number;

  @Column({ type: 'bigint', name: 'InstallmentRef' })
  installmentRef: number;

  @Column({ type: 'bigint', name: 'MaturedSharedInterestAllowanceRef' })
  maturedSharedInterestAllowanceRef: number;

  @Column({ type: 'numeric', name: 'InterestAmount' })
  interestAmount: number;

  @Column({ type: 'numeric', name: 'NotMaturedInterestAmount' })
  notMaturedInterestAmount: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}