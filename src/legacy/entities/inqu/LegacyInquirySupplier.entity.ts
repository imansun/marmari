import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InquirySupplier' })
export class LegacyInquirySupplier {
  @PrimaryColumn({ type: 'bigint', name: 'InquirySupplierID' })
  inquirySupplierID: number;

  @Column({ type: 'bigint', name: 'InquiryRef' })
  inquiryRef: number;

  @Column({ type: 'bigint', name: 'SupplierRef' })
  supplierRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}