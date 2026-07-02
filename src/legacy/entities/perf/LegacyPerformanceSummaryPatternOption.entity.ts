import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PerformanceSummaryPatternOption' })
export class LegacyPerformanceSummaryPatternOption {
  @PrimaryColumn({ type: 'bigint', name: 'PerformanceSummaryPatternOptionID' })
  performanceSummaryPatternOptionID: number;

  @Column({ type: 'bigint', name: 'PerformanceSummaryPatternRef' })
  performanceSummaryPatternRef: number;

  @Column({ type: 'character varying', name: 'OptionName' })
  optionName: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}