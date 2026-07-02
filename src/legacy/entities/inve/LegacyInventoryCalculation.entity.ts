import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InventoryCalculation' })
export class LegacyInventoryCalculation {
  @PrimaryColumn({ type: 'bigint', name: 'InventoryCalculationID' })
  inventoryCalculationID: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherItemRef' })
  inventoryVoucherItemRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'bigint', name: 'CalcPeriodRef' })
  calcPeriodRef: number;

  @Column({ type: 'integer', name: 'Rank' })
  rank: number;

  @Column({ type: 'bigint', name: 'CardexRef', nullable: true })
  cardexRef: number | null;

  @Column({ type: 'bigint', name: 'TrackingFactorRef', nullable: true })
  trackingFactorRef: number | null;

  @Column({ type: 'boolean', name: 'IsOtherSoldPart' })
  isOtherSoldPart: boolean;

  @Column({ type: 'integer', name: 'Step' })
  step: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'TrackingFactor', nullable: true })
  trackingFactor: string | null;

}