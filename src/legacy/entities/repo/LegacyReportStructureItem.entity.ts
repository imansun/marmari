import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReportStructureItem' })
export class LegacyReportStructureItem {
  @PrimaryColumn({ type: 'bigint', name: 'ReportStructureItemID' })
  reportStructureItemID: number;

  @Column({ type: 'bigint', name: 'ReportStructureRef' })
  reportStructureRef: number;

  @Column({ type: 'bigint', name: 'TopicRef', nullable: true })
  topicRef: number | null;

  @Column({ type: 'integer', name: 'TopicNature', nullable: true })
  topicNature: number | null;

  @Column({ type: 'character varying', name: 'Title', nullable: true })
  title: string | null;

  @Column({ type: 'integer', name: 'ColumnNo' })
  columnNo: number;

  @Column({ type: 'integer', name: 'RowNo' })
  rowNo: number;

  @Column({ type: 'integer', name: 'ColumnType', nullable: true })
  columnType: number | null;

  @Column({ type: 'integer', name: 'TotalType', nullable: true })
  totalType: number | null;

  @Column({ type: 'boolean', name: 'ShowTitle' })
  showTitle: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'TopicCalculationSourceType', nullable: true })
  topicCalculationSourceType: number | null;

  @Column({ type: 'character varying', name: 'InferredTitle', nullable: true })
  inferredTitle: string | null;

}