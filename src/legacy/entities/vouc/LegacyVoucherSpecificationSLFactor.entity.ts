import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherSpecificationSLFactor' })
export class LegacyVoucherSpecificationSLFactor {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherSpecificationSLFactorID' })
  voucherSpecificationSLFactorID: number;

  @Column({ type: 'bigint', name: 'VoucherSpecificationSLRef' })
  voucherSpecificationSLRef: number;

  @Column({ type: 'bigint', name: 'CompensationFactorRef' })
  compensationFactorRef: number;

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

  @Column({ type: 'bigint', name: 'EmploymentTypeRef', nullable: true })
  employmentTypeRef: number | null;

  @Column({ type: 'integer', name: 'ExportingMethodCode', default: 7 })
  exportingMethodCode: number;

}