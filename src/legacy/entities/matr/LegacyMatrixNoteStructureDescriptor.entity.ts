import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MatrixNoteStructureDescriptor' })
export class LegacyMatrixNoteStructureDescriptor {
  @PrimaryColumn({ type: 'bigint', name: 'MatrixNoteStructureDescriptorID' })
  matrixNoteStructureDescriptorID: number;

  @Column({ type: 'bigint', name: 'MatrixNoteStructureRef' })
  matrixNoteStructureRef: number;

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

  @Column({ type: 'boolean', name: 'GLChecked' })
  gLChecked: boolean;

  @Column({ type: 'boolean', name: 'SLChecked' })
  sLChecked: boolean;

  @Column({ type: 'boolean', name: 'DL4Checked' })
  dL4Checked: boolean;

  @Column({ type: 'boolean', name: 'DL5Checked' })
  dL5Checked: boolean;

  @Column({ type: 'boolean', name: 'DL6Checked' })
  dL6Checked: boolean;

  @Column({ type: 'boolean', name: 'DL7Checked' })
  dL7Checked: boolean;

  @Column({ type: 'boolean', name: 'DL8Checked' })
  dL8Checked: boolean;

  @Column({ type: 'boolean', name: 'DL9Checked' })
  dL9Checked: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}