import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StocktakingCountItem' })
export class LegacyStocktakingCountItem {
  @PrimaryColumn({ type: 'bigint', name: 'StocktakingCountItemID' })
  stocktakingCountItemID: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'character varying', name: 'Tag' })
  tag: string;

  @Column({ type: 'bigint', name: 'PartRef', nullable: true })
  partRef: number | null;

  @Column({ type: 'character varying', name: 'TrackingFactor1', nullable: true })
  trackingFactor1: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor2', nullable: true })
  trackingFactor2: string | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef1', nullable: true })
  partTrackingFactorRef1: number | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef2', nullable: true })
  partTrackingFactorRef2: number | null;

  @Column({ type: 'bigint', name: 'StocktakingItemRef', nullable: true })
  stocktakingItemRef: number | null;

  @Column({ type: 'bigint', name: 'StocktakingCountRef' })
  stocktakingCountRef: number;

  @Column({ type: 'numeric', name: 'Count', nullable: true })
  count: number | null;

  @Column({ type: 'character varying', name: 'ExceptionMessage', nullable: true })
  exceptionMessage: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'StocktakingPeriodRef' })
  stocktakingPeriodRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}