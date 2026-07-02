import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountingVoucherTemplateParameterValue' })
export class LegacyAccountingVoucherTemplateParameterValue {
  @PrimaryColumn({ type: 'bigint', name: 'AccountingVoucherTemplateParameterValueID' })
  accountingVoucherTemplateParameterValueID: number;

  @Column({ type: 'bigint', name: 'AccountingVoucherTemplateRef' })
  accountingVoucherTemplateRef: number;

  @Column({ type: 'integer', name: 'AccountGroup' })
  accountGroup: number;

  @Column({ type: 'integer', name: 'MergingProperty' })
  mergingProperty: number;

  @Column({ type: 'character varying', name: 'DescriptionTemplate' })
  descriptionTemplate: string;

  @Column({ type: 'boolean', name: 'ContractBase', nullable: true })
  contractBase: boolean | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}