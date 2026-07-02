import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StocktakingVoucherItemCountStage' })
export class LegacyStocktakingVoucherItemCountStage {
  @PrimaryColumn({ type: 'bigint', name: 'StocktakingVoucherItemCountStageID' })
  stocktakingVoucherItemCountStageID: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherItemRef' })
  inventoryVoucherItemRef: number;

  @Column({ type: 'bigint', name: 'StocktakingPeriodRef' })
  stocktakingPeriodRef: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherItemTrackingFactorRef', nullable: true })
  inventoryVoucherItemTrackingFactorRef: number | null;

  @Column({ type: 'integer', name: 'CountStage' })
  countStage: number;

  @Column({ type: 'character varying', name: 'StocktakingTrackingFactor1', nullable: true })
  stocktakingTrackingFactor1: string | null;

  @Column({ type: 'character varying', name: 'StocktakingTrackingFactor2', nullable: true })
  stocktakingTrackingFactor2: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}