import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TopicNoteRelationStructure' })
export class LegacyTopicNoteRelationStructure {
  @PrimaryColumn({ type: 'bigint', name: 'TopicNoteRelationStructureID' })
  topicNoteRelationStructureID: number;

  @Column({ type: 'bigint', name: 'TopicRef' })
  topicRef: number;

  @Column({ type: 'bigint', name: 'NoteStructureRef' })
  noteStructureRef: number;

  @Column({ type: 'integer', name: 'NoteType' })
  noteType: number;

  @Column({ type: 'bigint', name: 'StructureRef' })
  structureRef: number;

  @Column({ type: 'integer', name: 'FinancialStatementType' })
  financialStatementType: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}