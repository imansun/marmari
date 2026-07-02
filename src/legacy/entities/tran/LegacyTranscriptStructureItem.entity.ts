import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TranscriptStructureItem' })
export class LegacyTranscriptStructureItem {
  @PrimaryColumn({ type: 'bigint', name: 'TranscriptStructureItemID' })
  transcriptStructureItemID: number;

  @Column({ type: 'bigint', name: 'TranscriptStructureRef' })
  transcriptStructureRef: number;

  @Column({ type: 'bigint', name: 'PerformancePeriodFactorRef' })
  performancePeriodFactorRef: number;

  @Column({ type: 'character varying', name: 'FactorCustomTitle', nullable: true })
  factorCustomTitle: string | null;

  @Column({ type: 'numeric', name: 'MinExpectedRange', nullable: true })
  minExpectedRange: number | null;

  @Column({ type: 'numeric', name: 'MaxExpectedRange', nullable: true })
  maxExpectedRange: number | null;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}