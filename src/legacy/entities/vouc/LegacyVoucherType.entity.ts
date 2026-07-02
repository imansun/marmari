import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherType' })
export class LegacyVoucherType {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherTypeID' })
  voucherTypeID: number;

  @Column({ type: 'integer', name: 'Code', nullable: true })
  code: number | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'IsStatic' })
  isStatic: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'OwnerSystem', nullable: true })
  ownerSystem: string | null;

}