import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NoteAttachment' })
export class LegacyNoteAttachment {
  @PrimaryColumn({ type: 'bigint', name: 'NoteAttachmentID' })
  noteAttachmentID: number;

  @Column({ type: 'bigint', name: 'NoteRef' })
  noteRef: number;

  @Column({ type: 'character varying', name: 'FileName' })
  fileName: string;

  @Column({ type: 'bytea', name: 'FileContents' })
  fileContents: Buffer;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}