import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AnswerTemplate' })
export class LegacyAnswerTemplate {
  @PrimaryColumn({ type: 'bigint', name: 'AnswerTemplateID' })
  answerTemplateID: number;

  @Column({ type: 'character varying', name: 'Title', nullable: true })
  title: string | null;

  @Column({ type: 'bigint', name: 'PhraseRef' })
  phraseRef: number;

  @Column({ type: 'numeric', name: 'Weight', nullable: true })
  weight: number | null;

  @Column({ type: 'numeric', name: 'MinScore', nullable: true })
  minScore: number | null;

  @Column({ type: 'numeric', name: 'MaxScore', nullable: true })
  maxScore: number | null;

  @Column({ type: 'boolean', name: 'Required' })
  required: boolean;

  @Column({ type: 'boolean', name: 'FromReferenceAnswerStructure', nullable: true })
  fromReferenceAnswerStructure: boolean | null;

  @Column({ type: 'bigint', name: 'AnswerStructureRef', nullable: true })
  answerStructureRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}