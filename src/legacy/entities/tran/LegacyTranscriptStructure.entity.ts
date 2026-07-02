import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TranscriptStructure' })
export class LegacyTranscriptStructure {
  @PrimaryColumn({ type: 'bigint', name: 'TranscriptStructureID' })
  transcriptStructureID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'OutputStructures' })
  outputStructures: string;

  @Column({ type: 'character varying', name: 'ComparisonGroups', nullable: true })
  comparisonGroups: string | null;

  @Column({ type: 'character varying', name: 'CommentRegisterPossibilitys', nullable: true })
  commentRegisterPossibilitys: string | null;

  @Column({ type: 'integer', name: 'FinalScoreColorBase', nullable: true })
  finalScoreColorBase: number | null;

  @Column({ type: 'integer', name: 'PerformancePeriodCount', nullable: true })
  performancePeriodCount: number | null;

  @Column({ type: 'bigint', name: 'PerformanceManagementProcessRef' })
  performanceManagementProcessRef: number;

  @Column({ type: 'boolean', name: 'IsDefaultStructure' })
  isDefaultStructure: boolean;

  @Column({ type: 'boolean', name: 'ComparisonWithPreviousPeriod' })
  comparisonWithPreviousPeriod: boolean;

  @Column({ type: 'boolean', name: 'EvaluationDimensionsWeight' })
  evaluationDimensionsWeight: boolean;

  @Column({ type: 'boolean', name: 'AppraisalCount' })
  appraisalCount: boolean;

  @Column({ type: 'boolean', name: 'IndicatorWeight' })
  indicatorWeight: boolean;

  @Column({ type: 'boolean', name: 'QualitativeIndicators' })
  qualitativeIndicators: boolean;

  @Column({ type: 'boolean', name: 'CalculationIndicators' })
  calculationIndicators: boolean;

  @Column({ type: 'boolean', name: 'IndexQuorum' })
  indexQuorum: boolean;

  @Column({ type: 'boolean', name: 'IndicatorAverage' })
  indicatorAverage: boolean;

  @Column({ type: 'integer', name: 'SelectedComparisonGroupCode', nullable: true })
  selectedComparisonGroupCode: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}