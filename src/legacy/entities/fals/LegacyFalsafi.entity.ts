import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'falsafi' })
export class LegacyFalsafi {
  @PrimaryColumn({ type: 'bigint', name: 'StocktakingItemID' })
  stocktakingItemID: number;

  @PrimaryColumn({ type: 'bigint', name: 'TagNumber' })
  tagNumber: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'PartRef' })
  partRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'UnitRef' })
  unitRef: number | null;

  @PrimaryColumn({ type: 'character varying', name: 'TrackingFactor1' })
  trackingFactor1: string | null;

  @PrimaryColumn({ type: 'bigint', name: 'PartTrackingFactorRef1' })
  partTrackingFactorRef1: number | null;

  @PrimaryColumn({ type: 'character varying', name: 'TrackingFactor2' })
  trackingFactor2: string | null;

  @PrimaryColumn({ type: 'bigint', name: 'PartTrackingFactorRef2' })
  partTrackingFactorRef2: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'StocktakingListRef' })
  stocktakingListRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'StocktakingPeriodRef' })
  stocktakingPeriodRef: number;

  @PrimaryColumn({ type: 'numeric', name: 'Count1' })
  count1: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'Count2' })
  count2: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'Count3' })
  count3: number | null;

  @PrimaryColumn({ type: 'boolean', name: 'IsManualIn2' })
  isManualIn2: boolean;

  @PrimaryColumn({ type: 'boolean', name: 'IsManualIn3' })
  isManualIn3: boolean;

  @PrimaryColumn({ type: 'boolean', name: 'IsWhiteTag' })
  isWhiteTag: boolean;

  @PrimaryColumn({ type: 'boolean', name: 'HasTransaction' })
  hasTransaction: boolean;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @PrimaryColumn({ type: 'integer', name: 'CountNumber' })
  countNumber: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'LastCount' })
  lastCount: number | null;

}