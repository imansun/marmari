import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Attachment' })
export class LegacyAttachment {
  @PrimaryColumn({ type: 'bigint', name: 'AttachmentID' })
  attachmentID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'uuid', name: 'FileGuid' })
  fileGuid: string;

  @Column({ type: 'integer', name: 'ReferenceCount', default: 0 })
  referenceCount: number;

  @Column({ type: 'bigint', name: 'Size' })
  size: number;

  @Column({ type: 'character varying', name: 'Extension' })
  extension: string;

  @Column({ type: 'character varying', name: 'ContentType' })
  contentType: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}