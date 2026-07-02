import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailLoyaltyProgramApplyingCoefficientCreditRange' })
export class LegacyRetailLoyaltyProgramApplyingCoefficientCreditRange {
  @PrimaryColumn({ type: 'bigint', name: 'RetailLoyaltyProgramApplyingCoefficientCreditRangeID' })
  retailLoyaltyProgramApplyingCoefficientCreditRangeID: number;

  @Column({ type: 'bigint', name: 'RetailLoyaltyProgramRef' })
  retailLoyaltyProgramRef: number;

  @Column({ type: 'numeric', name: 'CreditAmount' })
  creditAmount: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}