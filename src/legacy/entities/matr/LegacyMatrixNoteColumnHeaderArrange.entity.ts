import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MatrixNoteColumnHeaderArrange' })
export class LegacyMatrixNoteColumnHeaderArrange {
  @PrimaryColumn({ type: 'bigint', name: 'MatrixNoteColumnHeaderArrangeID' })
  matrixNoteColumnHeaderArrangeID: number;

  @Column({ type: 'bigint', name: 'MatrixNoteStructureRef' })
  matrixNoteStructureRef: number;

  @Column({ type: 'bigint', name: 'MatrixNoteStructureInfoRef', nullable: true })
  matrixNoteStructureInfoRef: number | null;

  @Column({ type: 'character varying', name: 'Text' })
  text: string;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'integer', name: 'NodeOrder' })
  nodeOrder: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}