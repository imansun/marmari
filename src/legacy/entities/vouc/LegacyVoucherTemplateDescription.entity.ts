import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherTemplateDescription' })
export class LegacyVoucherTemplateDescription {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherTemplateDescriptionID' })
  voucherTemplateDescriptionID: number;

  @Column({ type: 'bigint', name: 'VoucherTemplateRef' })
  voucherTemplateRef: number;

  @Column({ type: 'character varying', name: 'AccountGroup' })
  accountGroup: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'FormattedDescription', nullable: true })
  formattedDescription: string | null;

}