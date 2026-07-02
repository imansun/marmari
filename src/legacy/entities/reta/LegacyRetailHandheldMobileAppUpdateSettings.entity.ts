import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailHandheldMobileAppUpdateSettings' })
export class LegacyRetailHandheldMobileAppUpdateSettings {
  @PrimaryColumn({ type: 'bigint', name: 'RetailHandheldMobileAppUpdateSettingsID' })
  retailHandheldMobileAppUpdateSettingsID: number;

  @Column({ type: 'integer', name: 'PDAType' })
  pDAType: number;

  @Column({ type: 'character varying', name: 'LatestVersion', nullable: true })
  latestVersion: string | null;

  @Column({ type: 'character varying', name: 'FileName', nullable: true })
  fileName: string | null;

  @Column({ type: 'character varying', name: 'MimeType', nullable: true })
  mimeType: string | null;

  @Column({ type: 'bytea', name: 'FileContent', nullable: true })
  fileContent: Buffer | null;

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