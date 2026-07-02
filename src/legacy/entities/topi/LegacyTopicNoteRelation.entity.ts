import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TopicNoteRelation' })
export class LegacyTopicNoteRelation {
  @PrimaryColumn({ type: 'bigint', name: 'TopicNoteRelationID' })
  topicNoteRelationID: number;

  @Column({ type: 'bigint', name: 'TopicRef' })
  topicRef: number;

  @Column({ type: 'bigint', name: 'NoteRef' })
  noteRef: number;

  @Column({ type: 'integer', name: 'NoteType' })
  noteType: number;

  @Column({ type: 'bigint', name: 'ReportRef' })
  reportRef: number;

  @Column({ type: 'integer', name: 'FinancialStatementType' })
  financialStatementType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}