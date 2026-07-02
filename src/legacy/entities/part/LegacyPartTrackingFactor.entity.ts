import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartTrackingFactor' })
export class LegacyPartTrackingFactor {
  @PrimaryColumn({ type: 'bigint', name: 'PartTrackingFactorID' })
  partTrackingFactorID: number;

  @Column({ type: 'bigint', name: 'TrackingFactorRef' })
  trackingFactorRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'boolean', name: 'IsPricableFactor' })
  isPricableFactor: boolean;

  @Column({ type: 'boolean', name: 'IsStocktakingFactor' })
  isStocktakingFactor: boolean;

  @Column({ type: 'boolean', name: 'IsOptionalForTempVoucher' })
  isOptionalForTempVoucher: boolean;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}