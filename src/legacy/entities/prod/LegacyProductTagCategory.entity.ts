import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductTagCategory' })
export class LegacyProductTagCategory {
  @PrimaryColumn({ type: 'bigint', name: 'ProductTagCategoryID' })
  productTagCategoryID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bigint', name: 'SourceRef' })
  sourceRef: number;

  @Column({ type: 'integer', name: 'GroupingLevel', nullable: true })
  groupingLevel: number | null;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}