import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'UploadSettings' })
export class LegacyUploadSettings {
  @PrimaryColumn({ type: 'bigint', name: 'UploadSettingsID' })
  uploadSettingsID: number;

  @Column({ type: 'integer', name: 'DocumentType' })
  documentType: number;

  @Column({ type: 'boolean', name: 'Enabled' })
  enabled: boolean;

  @Column({ type: 'timestamp without time zone', name: 'LastTimestamp', nullable: true })
  lastTimestamp: Date | null;

  @Column({ type: 'character varying', name: 'Url' })
  url: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}