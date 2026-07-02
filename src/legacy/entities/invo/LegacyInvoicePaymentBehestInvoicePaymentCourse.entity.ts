import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InvoicePaymentBehestInvoicePaymentCourse' })
export class LegacyInvoicePaymentBehestInvoicePaymentCourse {
  @PrimaryColumn({ type: 'bigint', name: 'InvoicePaymentBehestInvoicePaymentCourseID' })
  invoicePaymentBehestInvoicePaymentCourseID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'Cue' })
  cue: number;

  @Column({ type: 'integer', name: 'PaymentKind', nullable: true })
  paymentKind: number | null;

  @Column({ type: 'character varying', name: 'AccountProprietressName', nullable: true })
  accountProprietressName: string | null;

  @Column({ type: 'character varying', name: 'NationalEarmarkCode', nullable: true })
  nationalEarmarkCode: string | null;

  @Column({ type: 'character varying', name: 'ShbaNo', nullable: true })
  shbaNo: string | null;

  @Column({ type: 'character varying', name: 'BankName', nullable: true })
  bankName: string | null;

  @Column({ type: 'timestamp without time zone', name: 'BidCreditDate', nullable: true })
  bidCreditDate: Date | null;

  @Column({ type: 'numeric', name: 'RialUntoAmount', nullable: true })
  rialUntoAmount: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}