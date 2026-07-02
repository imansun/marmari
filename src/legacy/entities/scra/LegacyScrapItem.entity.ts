import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ScrapItem' })
export class LegacyScrapItem {
  @PrimaryColumn({ type: 'bigint', name: 'ScrapItemID' })
  scrapItemID: number;

  @Column({ type: 'bigint', name: 'ScrapRef' })
  scrapRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'boolean', name: 'IsReturn' })
  isReturn: boolean;

  @Column({ type: 'numeric', name: 'ExpenditureSide', nullable: true })
  expenditureSide: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}