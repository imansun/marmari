import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TopicToSLRelationDL' })
export class LegacyTopicToSLRelationDL {
  @PrimaryColumn({ type: 'bigint', name: 'TopicToSLRelationDLID' })
  topicToSLRelationDLID: number;

  @Column({ type: 'bigint', name: 'TopicRef' })
  topicRef: number;

  @Column({ type: 'bigint', name: 'TopicToSLRelationRef' })
  topicToSLRelationRef: number;

  @Column({ type: 'character varying', name: 'DLCode', nullable: true })
  dLCode: string | null;

  @Column({ type: 'integer', name: 'DLLevelNo' })
  dLLevelNo: number;

  @Column({ type: 'bigint', name: 'DLTypeRef' })
  dLTypeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}