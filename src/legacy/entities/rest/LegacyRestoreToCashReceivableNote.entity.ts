import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RestoreToCashReceivableNote' })
export class LegacyRestoreToCashReceivableNote {
  @PrimaryColumn({ type: 'bigint', name: 'RestoreToCashReceivableNoteID' })
  restoreToCashReceivableNoteID: number;

  @Column({ type: 'bigint', name: 'RestoreToCashRef' })
  restoreToCashRef: number;

  @Column({ type: 'bigint', name: 'ReceivableNoteRef' })
  receivableNoteRef: number;

  @Column({ type: 'bigint', name: 'ReceivableNoteTransactionRef' })
  receivableNoteTransactionRef: number;

  @Column({ type: 'integer', name: 'NoteType' })
  noteType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'character varying', name: 'StandardDescriptionPattern', nullable: true })
  standardDescriptionPattern: string | null;

}