import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DonationItemInCalculationArea' })
export class LegacyDonationItemInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'DonationItemInCalculationAreaID' })
  donationItemInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'DonationItemRef' })
  donationItemRef: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'numeric', name: 'CostSide' })
  costSide: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}