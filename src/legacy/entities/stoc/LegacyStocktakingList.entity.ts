import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StocktakingList' })
export class LegacyStocktakingList {
  @PrimaryColumn({ type: 'bigint', name: 'StocktakingListID' })
  stocktakingListID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'StocktakingPeriodRef' })
  stocktakingPeriodRef: number;

  @Column({ type: 'integer', name: 'CountState1' })
  countState1: number;

  @Column({ type: 'integer', name: 'CountState2' })
  countState2: number;

  @Column({ type: 'integer', name: 'CountState3' })
  countState3: number;

  @Column({ type: 'integer', name: 'TagIssueState' })
  tagIssueState: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}