import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BarCodeTemplate' })
export class LegacyBarCodeTemplate {
  @PrimaryColumn({ type: 'bigint', name: 'BarcodeTemplateID' })
  barcodeTemplateID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'RegularExperssion' })
  regularExperssion: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'Length' })
  length: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'boolean', name: 'IsUnique' })
  isUnique: boolean;

}