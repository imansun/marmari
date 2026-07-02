import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherDescription' })
export class LegacyVoucherDescription {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherDescriptionID' })
  voucherDescriptionID: number;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'integer', name: 'EntityCode', nullable: true })
  entityCode: number | null;

  @Column({ type: 'character varying', name: 'Discriminator', nullable: true })
  discriminator: string | null;

  @Column({ type: 'integer', name: 'AccountGroupType', nullable: true })
  accountGroupType: number | null;

  @Column({ type: 'boolean', name: 'IsDebit' })
  isDebit: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}