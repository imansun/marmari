import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherSpecificationSLRelatedDL' })
export class LegacyVoucherSpecificationSLRelatedDL {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherSpecificationSLRelatedDLID' })
  voucherSpecificationSLRelatedDLID: number;

  @Column({ type: 'bigint', name: 'VoucherSpecificationSLRef' })
  voucherSpecificationSLRef: number;

  @Column({ type: 'bigint', name: 'DLRef' })
  dLRef: number;

  @Column({ type: 'character varying', name: 'DLCode' })
  dLCode: string;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}