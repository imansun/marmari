import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TopicToTopicRelation' })
export class LegacyTopicToTopicRelation {
  @PrimaryColumn({ type: 'bigint', name: 'TopicToTopicRelationID' })
  topicToTopicRelationID: number;

  @Column({ type: 'bigint', name: 'MainTopicRef' })
  mainTopicRef: number;

  @Column({ type: 'bigint', name: 'UsedTopicRef' })
  usedTopicRef: number;

  @Column({ type: 'integer', name: 'UsedTopicNature' })
  usedTopicNature: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'RowNo' })
  rowNo: number;

}