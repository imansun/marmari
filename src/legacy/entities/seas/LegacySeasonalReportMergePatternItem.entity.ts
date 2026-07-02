import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SeasonalReportMergePatternItem' })
export class LegacySeasonalReportMergePatternItem {
  @PrimaryColumn({ type: 'bigint', name: 'SeasonalReportMergePatternItemID' })
  seasonalReportMergePatternItemID: number;

  @Column({ type: 'bigint', name: 'SeasonalReportMergePatternRef' })
  seasonalReportMergePatternRef: number;

  @Column({ type: 'integer', name: 'ProviderType' })
  providerType: number;

  @Column({ type: 'character varying', name: 'Args', nullable: true })
  args: string | null;

  @Column({ type: 'character varying', name: 'TaggingAgentKey' })
  taggingAgentKey: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'PartyType' })
  partyType: number;

}