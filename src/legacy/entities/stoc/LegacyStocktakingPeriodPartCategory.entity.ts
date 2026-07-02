import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StocktakingPeriodPartCategory' })
export class LegacyStocktakingPeriodPartCategory {
  @PrimaryColumn({ type: 'bigint', name: 'StocktakingPeriodPartCategoryID' })
  stocktakingPeriodPartCategoryID: number;

  @Column({ type: 'bigint', name: 'StocktakingPeriodRef' })
  stocktakingPeriodRef: number;

  @Column({ type: 'bigint', name: 'PartCategoryRef' })
  partCategoryRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}