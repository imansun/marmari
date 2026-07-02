import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ServiceCategoryItem' })
export class LegacyServiceCategoryItem {
  @PrimaryColumn({ type: 'bigint', name: 'ServiceCategoryItemID' })
  serviceCategoryItemID: number;

  @Column({ type: 'bigint', name: 'ServiceCategoryRef' })
  serviceCategoryRef: number;

  @Column({ type: 'bigint', name: 'ServiceRef' })
  serviceRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}