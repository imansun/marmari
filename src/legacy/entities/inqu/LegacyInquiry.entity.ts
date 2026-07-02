import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Inquiry' })
export class LegacyInquiry {
  @PrimaryColumn({ type: 'bigint', name: 'InquiryID' })
  inquiryID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'InquiryDate' })
  inquiryDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'InquiryDeadLineDate' })
  inquiryDeadLineDate: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'PurchasingDepartmentRef' })
  purchasingDepartmentRef: number;

  @Column({ type: 'boolean', name: 'MultipleQuotationForOneSupplierEnabled' })
  multipleQuotationForOneSupplierEnabled: boolean;

}