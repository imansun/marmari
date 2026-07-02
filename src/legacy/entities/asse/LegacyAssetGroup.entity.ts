import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssetGroup' })
export class LegacyAssetGroup {
  @PrimaryColumn({ type: 'bigint', name: 'AssetGroupID' })
  assetGroupID: number;

  @Column({ type: 'bigint', name: 'AssetClassRef' })
  assetClassRef: number;

  @Column({ type: 'bigint', name: 'Code' })
  code: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsActive' })
  isActive: boolean;

}