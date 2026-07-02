import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ScanCenterDefaultSetting' })
export class LegacyScanCenterDefaultSetting {
  @PrimaryColumn({ type: 'bigint', name: 'ScanCenterDefaultSettingID' })
  scanCenterDefaultSettingID: number;

  @Column({ type: 'bigint', name: 'ScanCenterRef' })
  scanCenterRef: number;

  @Column({ type: 'character varying', name: 'DefaultDPI', nullable: true })
  defaultDPI: string | null;

  @Column({ type: 'character varying', name: 'DefaultDepth', nullable: true })
  defaultDepth: string | null;

  @Column({ type: 'character varying', name: 'DefaultPaperSize', nullable: true })
  defaultPaperSize: string | null;

  @Column({ type: 'character varying', name: 'DefaultFileFormat', nullable: true })
  defaultFileFormat: string | null;

  @Column({ type: 'integer', name: 'DefaultBrightness', nullable: true })
  defaultBrightness: number | null;

  @Column({ type: 'integer', name: 'DefaultContrast', nullable: true })
  defaultContrast: number | null;

  @Column({ type: 'integer', name: 'DefaultInputMode' })
  defaultInputMode: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}