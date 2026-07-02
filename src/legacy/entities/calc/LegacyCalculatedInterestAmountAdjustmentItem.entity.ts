import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculatedInterestAmountAdjustmentItem' })
export class LegacyCalculatedInterestAmountAdjustmentItem {
  @PrimaryColumn({ type: 'bigint', name: 'CalculatedInterestAmountAdjustmentItemID' })
  calculatedInterestAmountAdjustmentItemID: number;

  @Column({ type: 'bigint', name: 'CalculatedInterestAmountAdjustmentRef' })
  calculatedInterestAmountAdjustmentRef: number;

  @Column({ type: 'bigint', name: 'InstallmentRef' })
  installmentRef: number;

  @Column({ type: 'numeric', name: 'NotMaturedInterestShare' })
  notMaturedInterestShare: number;

  @Column({ type: 'numeric', name: 'NotMaturedSharedInterestAdjustment', nullable: true })
  notMaturedSharedInterestAdjustment: number | null;

  @Column({ type: 'numeric', name: 'MaturedSharedInterest' })
  maturedSharedInterest: number;

  @Column({ type: 'numeric', name: 'MaturedSharedInterestAdjustment', nullable: true })
  maturedSharedInterestAdjustment: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}