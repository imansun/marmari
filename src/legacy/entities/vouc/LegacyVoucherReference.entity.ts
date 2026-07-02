import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherReference' })
export class LegacyVoucherReference {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherReferenceID' })
  voucherReferenceID: number;

  @Column({ type: 'integer', name: 'OriginalEntityCode' })
  originalEntityCode: number;

  @Column({ type: 'bigint', name: 'OriginalReferenceID' })
  originalReferenceID: number;

  @Column({ type: 'integer', name: 'MasterEntityCode' })
  masterEntityCode: number;

  @Column({ type: 'bigint', name: 'MasterReferenceID' })
  masterReferenceID: number;

  @Column({ type: 'bigint', name: 'VoucherRef' })
  voucherRef: number;

  @Column({ type: 'character varying', name: 'ReferenceNumber', nullable: true })
  referenceNumber: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'Descriminator', nullable: true })
  descriminator: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}