import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssetDepreciationItem' })
export class LegacyAssetDepreciationItem {
  @PrimaryColumn({ type: 'bigint', name: 'AssetDepreciationItemID' })
  assetDepreciationItemID: number;

  @Column({ type: 'bigint', name: 'AssetDepreciationRef' })
  assetDepreciationRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}