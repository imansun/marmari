import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FinancialVoucherTemplateItem' })
export class LegacyFinancialVoucherTemplateItem {
  @PrimaryColumn({ type: 'bigint', name: 'FinancialVoucherTemplateItemID' })
  financialVoucherTemplateItemID: number;

  @Column({ type: 'bigint', name: 'FinancialVoucherTemplateRef' })
  financialVoucherTemplateRef: number;

  @Column({ type: 'integer', name: 'AccountGroupRef' })
  accountGroupRef: number;

  @Column({ type: 'integer', name: 'MergingProperty' })
  mergingProperty: number;

  @Column({ type: 'character varying', name: 'DescriptionTemplate' })
  descriptionTemplate: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}