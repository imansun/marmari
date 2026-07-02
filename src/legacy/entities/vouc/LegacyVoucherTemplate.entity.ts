import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherTemplate' })
export class LegacyVoucherTemplate {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherTemplateID' })
  voucherTemplateID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'EntityName' })
  entityName: string;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'ComponentName' })
  componentName: string;

  @Column({ type: 'boolean', name: 'IgnoreAccountGroupOnMerge' })
  ignoreAccountGroupOnMerge: boolean;

}