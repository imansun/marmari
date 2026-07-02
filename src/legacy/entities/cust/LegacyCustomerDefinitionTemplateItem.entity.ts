import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerDefinitionTemplateItem' })
export class LegacyCustomerDefinitionTemplateItem {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerDefinitionTemplateItemID' })
  customerDefinitionTemplateItemID: number;

  @Column({ type: 'integer', name: 'ColumnName' })
  columnName: number;

  @Column({ type: 'boolean', name: 'IsRequired' })
  isRequired: boolean;

  @Column({ type: 'integer', name: 'DisplayOrder', nullable: true })
  displayOrder: number | null;

  @Column({ type: 'integer', name: 'SearchOrder', nullable: true })
  searchOrder: number | null;

  @Column({ type: 'bigint', name: 'CustomerDefinitionTemplateRef' })
  customerDefinitionTemplateRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}