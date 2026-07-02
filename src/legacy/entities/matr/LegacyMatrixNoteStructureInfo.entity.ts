import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MatrixNoteStructureInfo' })
export class LegacyMatrixNoteStructureInfo {
  @PrimaryColumn({ type: 'bigint', name: 'MatrixNoteStructureInfoID' })
  matrixNoteStructureInfoID: number;

  @Column({ type: 'bigint', name: 'MatrixNoteStructureRef' })
  matrixNoteStructureRef: number;

  @Column({ type: 'integer', name: 'StructureType' })
  structureType: number;

  @Column({ type: 'integer', name: 'Index' })
  index: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'RelatedToAccount' })
  relatedToAccount: boolean;

  @Column({ type: 'boolean', name: 'ShowComparativeAmount' })
  showComparativeAmount: boolean;

  @Column({ type: 'boolean', name: 'BaseColumn' })
  baseColumn: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}