import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StocktakingItem' })
export class LegacyStocktakingItem {
  @PrimaryColumn({ type: 'bigint', name: 'StocktakingItemID' })
  stocktakingItemID: number;

  @Column({ type: 'bigint', name: 'TagNumber', nullable: true })
  tagNumber: number | null;

  @Column({ type: 'bigint', name: 'PartRef', nullable: true })
  partRef: number | null;

  @Column({ type: 'bigint', name: 'PartUnitRef', nullable: true })
  partUnitRef: number | null;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'character varying', name: 'TrackingFactor1', nullable: true })
  trackingFactor1: string | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef1', nullable: true })
  partTrackingFactorRef1: number | null;

  @Column({ type: 'character varying', name: 'TrackingFactor2', nullable: true })
  trackingFactor2: string | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef2', nullable: true })
  partTrackingFactorRef2: number | null;

  @Column({ type: 'bigint', name: 'StocktakingListRef' })
  stocktakingListRef: number;

  @Column({ type: 'bigint', name: 'StocktakingPeriodRef' })
  stocktakingPeriodRef: number;

  @Column({ type: 'numeric', name: 'Count1', nullable: true })
  count1: number | null;

  @Column({ type: 'numeric', name: 'Count2', nullable: true })
  count2: number | null;

  @Column({ type: 'numeric', name: 'Count3', nullable: true })
  count3: number | null;

  @Column({ type: 'boolean', name: 'IsManualIn2' })
  isManualIn2: boolean;

  @Column({ type: 'boolean', name: 'IsManualIn3' })
  isManualIn3: boolean;

  @Column({ type: 'boolean', name: 'IsWhiteTag' })
  isWhiteTag: boolean;

  @Column({ type: 'boolean', name: 'HasTransaction' })
  hasTransaction: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'CountNumber', nullable: true })
  countNumber: number | null;

  @Column({ type: 'numeric', name: 'LastCount', nullable: true })
  lastCount: number | null;

}