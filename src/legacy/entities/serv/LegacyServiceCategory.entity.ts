import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ServiceCategory' })
export class LegacyServiceCategory {
  @PrimaryColumn({ type: 'bigint', name: 'ServiceCategoryID' })
  serviceCategoryID: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}