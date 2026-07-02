import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReportTopicToSLRelation' })
export class LegacyReportTopicToSLRelation {
  @PrimaryColumn({ type: 'bigint', name: 'ReportTopicToSLRelationID' })
  reportTopicToSLRelationID: number;

  @Column({ type: 'bigint', name: 'ReportTopicRef' })
  reportTopicRef: number;

  @Column({ type: 'bigint', name: 'GLRef' })
  gLRef: number;

  @Column({ type: 'bigint', name: 'SLRef', nullable: true })
  sLRef: number | null;

  @Column({ type: 'character varying', name: 'SLCode', nullable: true })
  sLCode: string | null;

  @Column({ type: 'boolean', name: 'FullySelected' })
  fullySelected: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}