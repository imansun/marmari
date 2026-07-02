import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SeasonalReportLog' })
export class LegacySeasonalReportLog {
  @PrimaryColumn({ type: 'bigint', name: 'SeasonalReportLogID' })
  seasonalReportLogID: number;

  @Column({ type: 'bigint', name: 'GatheringProviderRef' })
  gatheringProviderRef: number;

  @Column({ type: 'bigint', name: 'CreatorUserRef' })
  creatorUserRef: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}