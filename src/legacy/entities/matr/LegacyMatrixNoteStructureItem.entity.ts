import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MatrixNoteStructureItem' })
export class LegacyMatrixNoteStructureItem {
  @PrimaryColumn({ type: 'bigint', name: 'MatrixNoteStructureItemID' })
  matrixNoteStructureItemID: number;

  @Column({ type: 'bigint', name: 'MatrixNoteStructureRef' })
  matrixNoteStructureRef: number;

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

  @Column({ type: 'integer', name: 'TotalType', nullable: true })
  totalType: number | null;

  @Column({ type: 'numeric', name: 'ImportanceAmount', nullable: true })
  importanceAmount: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'InferredTitle', nullable: true })
  inferredTitle: string | null;

}