import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReportTopicToSLRelationDL' })
export class LegacyReportTopicToSLRelationDL {
  @PrimaryColumn({ type: 'bigint', name: 'ReportTopicToSLRelationDLID' })
  reportTopicToSLRelationDLID: number;

  @Column({ type: 'bigint', name: 'ReportTopicToSLRelationRef' })
  reportTopicToSLRelationRef: number;

  @Column({ type: 'character varying', name: 'DLCode', nullable: true })
  dLCode: string | null;

  @Column({ type: 'integer', name: 'DLLevelNo' })
  dLLevelNo: number;

  @Column({ type: 'bigint', name: 'DLTypeRef' })
  dLTypeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}