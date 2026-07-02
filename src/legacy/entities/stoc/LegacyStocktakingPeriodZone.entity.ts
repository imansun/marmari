import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StocktakingPeriodZone' })
export class LegacyStocktakingPeriodZone {
  @PrimaryColumn({ type: 'bigint', name: 'StocktakingPeriodZoneID' })
  stocktakingPeriodZoneID: number;

  @Column({ type: 'character varying', name: 'Title', nullable: true })
  title: string | null;

  @Column({ type: 'bigint', name: 'StocktakingPeriodRef' })
  stocktakingPeriodRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'CountState1', default: 1 })
  countState1: number;

  @Column({ type: 'integer', name: 'CountState2', default: 1 })
  countState2: number;

  @Column({ type: 'integer', name: 'CountState3', default: 1 })
  countState3: number;

}