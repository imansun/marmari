import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerDefinitionTemplateSpecificSearchItem' })
export class LegacyCustomerDefinitionTemplateSpecificSearchItem {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerDefinitionTemplateSpecificSearchItemID' })
  customerDefinitionTemplateSpecificSearchItemID: number;

  @Column({ type: 'integer', name: 'Key' })
  key: number;

  @Column({ type: 'boolean', name: 'IsActive' })
  isActive: boolean;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bigint', name: 'CustomerDefinitionTemplateRef' })
  customerDefinitionTemplateRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}