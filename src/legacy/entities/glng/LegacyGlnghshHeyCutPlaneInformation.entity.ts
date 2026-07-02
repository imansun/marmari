import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'GlnghshHeyCutPlaneInformation' })
export class LegacyGlnghshHeyCutPlaneInformation {
  @PrimaryColumn({ type: 'bigint', name: 'GlnghshHeyCutPlaneInformationID' })
  glnghshHeyCutPlaneInformationID: number;

  @Column({ type: 'bigint', name: 'CutRef', nullable: true })
  cutRef: number | null;

  @Column({ type: 'character varying', name: 'CutCode', nullable: true })
  cutCode: string | null;

  @Column({ type: 'numeric', name: 'ChromaticSeamQuantity', nullable: true })
  chromaticSeamQuantity: number | null;

  @Column({ type: 'integer', name: 'ChromaticSeamKind', nullable: true })
  chromaticSeamKind: number | null;

  @Column({ type: 'integer', name: 'Rng1', nullable: true })
  rng1: number | null;

  @Column({ type: 'integer', name: 'Rng2', nullable: true })
  rng2: number | null;

  @Column({ type: 'integer', name: 'Rng3Code', nullable: true })
  rng3Code: number | null;

  @Column({ type: 'integer', name: 'Rng4Code', nullable: true })
  rng4Code: number | null;

  @Column({ type: 'integer', name: 'Rng5Code', nullable: true })
  rng5Code: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}