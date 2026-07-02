import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldStocktakingList' })
export class LegacyHandheldStocktakingList {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldStocktakingListID' })
  handheldStocktakingListID: number;

  @Column({ type: 'bigint', name: 'StocktakingPeriodRef' })
  stocktakingPeriodRef: number;

  @Column({ type: 'bigint', name: 'StocktakingListRef' })
  stocktakingListRef: number;

  @Column({ type: 'integer', name: 'CountNumber' })
  countNumber: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

}