import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PowerBIItem' })
export class LegacyPowerBIItem {
  @PrimaryColumn({ type: 'bigint', name: 'PowerBIItemID' })
  powerBIItemID: number;

  @Column({ type: 'character varying', name: 'ReportServerParentFolderRef', nullable: true })
  reportServerParentFolderRef: string | null;

  @Column({ type: 'character varying', name: 'ReportServerCatalogItemRef' })
  reportServerCatalogItemRef: string;

  @Column({ type: 'integer', name: 'OrderInSiblings' })
  orderInSiblings: number;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bytea', name: 'Preview', nullable: true })
  preview: Buffer | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}