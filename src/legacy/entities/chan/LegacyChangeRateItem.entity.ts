import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ChangeRateItem' })
export class LegacyChangeRateItem {
  @PrimaryColumn({ type: 'bigint', name: 'ChangeRateItemID' })
  changeRateItemID: number;

  @Column({ type: 'bigint', name: 'ChangeRateRef' })
  changeRateRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'bigint', name: 'AssetGroupRef', nullable: true })
  assetGroupRef: number | null;

  @Column({ type: 'bigint', name: 'PreviousAssetGroupRef', nullable: true })
  previousAssetGroupRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En' })
  descriptionEn: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}