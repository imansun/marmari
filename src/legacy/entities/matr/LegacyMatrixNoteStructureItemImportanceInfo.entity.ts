import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MatrixNoteStructureItemImportanceInfo' })
export class LegacyMatrixNoteStructureItemImportanceInfo {
  @PrimaryColumn({ type: 'bigint', name: 'MatrixNoteStructureItemImportanceInfoID' })
  matrixNoteStructureItemImportanceInfoID: number;

  @Column({ type: 'bigint', name: 'MatrixNoteStructureItemRef' })
  matrixNoteStructureItemRef: number;

  @Column({ type: 'integer', name: 'ImportanceType' })
  importanceType: number;

  @Column({ type: 'bigint', name: 'GLRef', nullable: true })
  gLRef: number | null;

  @Column({ type: 'bigint', name: 'SLRef', nullable: true })
  sLRef: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef', nullable: true })
  dLTypeRef: number | null;

  @Column({ type: 'character varying', name: 'DLLevel', nullable: true })
  dLLevel: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}