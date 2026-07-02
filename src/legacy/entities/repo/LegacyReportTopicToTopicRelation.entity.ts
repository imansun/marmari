import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReportTopicToTopicRelation' })
export class LegacyReportTopicToTopicRelation {
  @PrimaryColumn({ type: 'bigint', name: 'ReportTopicToTopicRelationID' })
  reportTopicToTopicRelationID: number;

  @Column({ type: 'bigint', name: 'MainReportTopicRef' })
  mainReportTopicRef: number;

  @Column({ type: 'bigint', name: 'UsedReportTopicRef' })
  usedReportTopicRef: number;

  @Column({ type: 'integer', name: 'UsedReportTopicNature' })
  usedReportTopicNature: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'RowNo' })
  rowNo: number;

}