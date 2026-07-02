import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductAttachment' })
export class LegacyProductAttachment {
  @PrimaryColumn({ type: 'bigint', name: 'ProductAttachmentID' })
  productAttachmentID: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'FileName' })
  fileName: string;

  @Column({ type: 'character varying', name: 'MimeType' })
  mimeType: string;

  @Column({ type: 'integer', name: 'Type', nullable: true })
  type: number | null;

  @Column({ type: 'boolean', name: 'IsPrimary' })
  isPrimary: boolean;

  @Column({ type: 'bytea', name: 'FileContent' })
  fileContent: Buffer;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

}