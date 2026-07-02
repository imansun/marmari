import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StocktakingCount' })
export class LegacyStocktakingCount {
  @PrimaryColumn({ type: 'bigint', name: 'StocktakingCountID' })
  stocktakingCountID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'bigint', name: 'StocktakingPeriodRef' })
  stocktakingPeriodRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'CountStep' })
  countStep: number;

  @Column({ type: 'bigint', name: 'StocktakingPeriodZoneRef', nullable: true })
  stocktakingPeriodZoneRef: number | null;

}