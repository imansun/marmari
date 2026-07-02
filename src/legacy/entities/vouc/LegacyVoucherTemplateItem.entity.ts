import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherTemplateItem' })
export class LegacyVoucherTemplateItem {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherTemplateItemID' })
  voucherTemplateItemID: number;

  @Column({ type: 'bigint', name: 'VoucherTemplateRef' })
  voucherTemplateRef: number;

  @Column({ type: 'character varying', name: 'AccountGroup' })
  accountGroup: string;

  @Column({ type: 'character varying', name: 'Parameter' })
  parameter: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}