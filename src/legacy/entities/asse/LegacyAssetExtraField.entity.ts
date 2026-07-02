import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssetExtraField' })
export class LegacyAssetExtraField {
  @PrimaryColumn({ type: 'bigint', name: 'AssetExtraFieldID' })
  assetExtraFieldID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_EN', nullable: true })
  titleEn: string | null;

  @Column({ type: 'bigint', name: 'AssetClassRef' })
  assetClassRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsFixed', default: false })
  isFixed: boolean;

  @Column({ type: 'character varying', name: 'DisketteColumnName', nullable: true })
  disketteColumnName: string | null;

}