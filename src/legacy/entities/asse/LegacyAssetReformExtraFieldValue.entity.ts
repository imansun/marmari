import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssetReformExtraFieldValue' })
export class LegacyAssetReformExtraFieldValue {
  @PrimaryColumn({ type: 'bigint', name: 'AssetReformExtraFieldValueID' })
  assetReformExtraFieldValueID: number;

  @Column({ type: 'bigint', name: 'AssetExtraFieldRef' })
  assetExtraFieldRef: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'character varying', name: 'Value' })
  value: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}