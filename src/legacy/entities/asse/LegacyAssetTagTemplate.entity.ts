import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssetTagTemplate' })
export class LegacyAssetTagTemplate {
  @PrimaryColumn({ type: 'bigint', name: 'AssetTagTemplateID' })
  assetTagTemplateID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'SystemicLatinName', nullable: true })
  systemicLatinName: string | null;

  @Column({ type: 'bigint', name: 'IncludedTagFields' })
  includedTagFields: number;

  @Column({ type: 'character varying', name: 'Settings' })
  settings: string;

  @Column({ type: 'character varying', name: 'ReportData' })
  reportData: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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