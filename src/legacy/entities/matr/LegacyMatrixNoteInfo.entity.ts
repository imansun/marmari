import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MatrixNoteInfo' })
export class LegacyMatrixNoteInfo {
  @PrimaryColumn({ type: 'bigint', name: 'MatrixNoteInfoID' })
  matrixNoteInfoID: number;

  @Column({ type: 'bigint', name: 'MatrixNoteRef' })
  matrixNoteRef: number;

  @Column({ type: 'integer', name: 'StructureType' })
  structureType: number;

  @Column({ type: 'integer', name: 'Index' })
  index: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'RelatedToAccount' })
  relatedToAccount: boolean;

  @Column({ type: 'boolean', name: 'ShowComparativeAmount', nullable: true })
  showComparativeAmount: boolean | null;

  @Column({ type: 'boolean', name: 'BaseColumn' })
  baseColumn: boolean;

  @Column({ type: 'character varying', name: 'GLTitle', nullable: true })
  gLTitle: string | null;

  @Column({ type: 'character varying', name: 'SLTitle', nullable: true })
  sLTitle: string | null;

  @Column({ type: 'character varying', name: 'DL4Title', nullable: true })
  dL4Title: string | null;

  @Column({ type: 'character varying', name: 'DL5Title', nullable: true })
  dL5Title: string | null;

  @Column({ type: 'character varying', name: 'DL6Title', nullable: true })
  dL6Title: string | null;

  @Column({ type: 'character varying', name: 'DL7Title', nullable: true })
  dL7Title: string | null;

  @Column({ type: 'character varying', name: 'DL8Title', nullable: true })
  dL8Title: string | null;

  @Column({ type: 'character varying', name: 'DL9Title', nullable: true })
  dL9Title: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}