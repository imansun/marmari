import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MatrixAccountNote' })
export class LegacyMatrixAccountNote {
  @PrimaryColumn({ type: 'bigint', name: 'MatrixAccountNoteID' })
  matrixAccountNoteID: number;

  @Column({ type: 'bigint', name: 'TopicRef' })
  topicRef: number;

  @Column({ type: 'bigint', name: 'MatrixNoteRef' })
  matrixNoteRef: number;

  @Column({ type: 'integer', name: 'Nature' })
  nature: number;

  @Column({ type: 'integer', name: 'ColumnNo' })
  columnNo: number;

  @Column({ type: 'integer', name: 'RowNo' })
  rowNo: number;

  @Column({ type: 'integer', name: 'AccountType' })
  accountType: number;

  @Column({ type: 'integer', name: 'DLCalculationType', nullable: true })
  dLCalculationType: number | null;

  @Column({ type: 'integer', name: 'DLLevel', nullable: true })
  dLLevel: number | null;

  @Column({ type: 'numeric', name: 'ImportanceAmount' })
  importanceAmount: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}