import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldMessageAttachment' })
export class LegacyHandheldMessageAttachment {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldMessageAttachmentID' })
  handheldMessageAttachmentID: number;

  @Column({ type: 'bigint', name: 'HandheldMessageRef' })
  handheldMessageRef: number;

  @Column({ type: 'character varying', name: 'FileName' })
  fileName: string;

  @Column({ type: 'character varying', name: 'MimeType' })
  mimeType: string;

  @Column({ type: 'bytea', name: 'FileContent' })
  fileContent: Buffer;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}