import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailLoyaltyProgramApplyingCoefficientPointRange' })
export class LegacyRetailLoyaltyProgramApplyingCoefficientPointRange {
  @PrimaryColumn({ type: 'bigint', name: 'RetailLoyaltyProgramApplyingCoefficientPointRangeID' })
  retailLoyaltyProgramApplyingCoefficientPointRangeID: number;

  @Column({ type: 'bigint', name: 'RetailLoyaltyProgramRef' })
  retailLoyaltyProgramRef: number;

  @Column({ type: 'numeric', name: 'PointAmount' })
  pointAmount: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}