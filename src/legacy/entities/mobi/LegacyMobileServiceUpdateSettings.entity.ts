import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MobileServiceUpdateSettings' })
export class LegacyMobileServiceUpdateSettings {
  @PrimaryColumn({ type: 'bigint', name: 'MobileServiceUpdateSettingsID' })
  mobileServiceUpdateSettingsID: number;

  @Column({ type: 'bigint', name: 'HandheldPosRef' })
  handheldPosRef: number;

  @Column({ type: 'character varying', name: 'VersionNumber', nullable: true })
  versionNumber: string | null;

  @Column({ type: 'character varying', name: 'FileName', nullable: true })
  fileName: string | null;

  @Column({ type: 'character varying', name: 'MimeType', nullable: true })
  mimeType: string | null;

  @Column({ type: 'integer', name: 'Type', nullable: true })
  type: number | null;

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

  @Column({ type: 'bytea', name: 'FileContent', nullable: true })
  fileContent: Buffer | null;

}