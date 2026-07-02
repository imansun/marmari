import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssetExtraFieldValue' })
export class LegacyAssetExtraFieldValue {
  @PrimaryColumn({ type: 'bigint', name: 'AssetExtraFieldValueID' })
  assetExtraFieldValueID: number;

  @Column({ type: 'bigint', name: 'AssetExtraFieldRef' })
  assetExtraFieldRef: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'character varying', name: 'Value' })
  value: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsReformed', default: false })
  isReformed: boolean;

}