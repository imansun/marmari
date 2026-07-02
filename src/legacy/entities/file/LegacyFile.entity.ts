import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'File' })
export class LegacyFile {
  @PrimaryColumn({ type: 'bigint', name: 'FileID' })
  fileID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'bytea', name: 'Content', nullable: true })
  content: Buffer | null;

  @Column({ type: 'character varying', name: 'Tag', nullable: true })
  tag: string | null;

  @Column({ type: 'uuid', name: 'UniqueId' })
  uniqueId: string;

  @Column({ type: 'integer', name: 'ReferenceCount', default: 0 })
  referenceCount: number;

  @Column({ type: 'character varying', name: 'ContentType' })
  contentType: string;

  @Column({ type: 'character varying', name: 'Ext', nullable: true })
  ext: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'Size' })
  size: number;

  @Column({ type: 'bytea', name: 'ContentHash', nullable: true })
  contentHash: Buffer | null;

  @Column({ type: 'bigint', name: 'ArchiveShardRef', nullable: true })
  archiveShardRef: number | null;

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