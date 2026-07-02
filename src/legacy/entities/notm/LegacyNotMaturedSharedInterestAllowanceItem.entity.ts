import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NotMaturedSharedInterestAllowanceItem' })
export class LegacyNotMaturedSharedInterestAllowanceItem {
  @PrimaryColumn({ type: 'bigint', name: 'NotMaturedSharedInterestAllowanceItemID' })
  notMaturedSharedInterestAllowanceItemID: number;

  @Column({ type: 'bigint', name: 'InstallmentRef' })
  installmentRef: number;

  @Column({ type: 'bigint', name: 'NotMaturedSharedInterestAllowanceRef' })
  notMaturedSharedInterestAllowanceRef: number;

  @Column({ type: 'numeric', name: 'InterestAmount' })
  interestAmount: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}