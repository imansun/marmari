import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldBaseDataBagStocktakingPeriod' })
export class LegacyHandheldBaseDataBagStocktakingPeriod {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldBaseDataBagStocktakingPeriodID' })
  handheldBaseDataBagStocktakingPeriodID: number;

  @Column({ type: 'bigint', name: 'HandheldBaseDataBagRef' })
  handheldBaseDataBagRef: number;

  @Column({ type: 'bigint', name: 'StocktakingPeriodRef' })
  stocktakingPeriodRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}