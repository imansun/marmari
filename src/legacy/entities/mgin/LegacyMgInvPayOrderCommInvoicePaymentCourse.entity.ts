import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MgInvPayOrderCommInvoicePaymentCourse' })
export class LegacyMgInvPayOrderCommInvoicePaymentCourse {
  @PrimaryColumn({ type: 'bigint', name: 'MgInvPayOrderCommInvoicePaymentCourseID' })
  mgInvPayOrderCommInvoicePaymentCourseID: number;

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

  @Column({ type: 'character varying', name: 'BankName', nullable: true })
  bankName: string | null;

  @Column({ type: 'timestamp without time zone', name: 'BidCreditDate', nullable: true })
  bidCreditDate: Date | null;

  @Column({ type: 'numeric', name: 'RialUntoAmount', nullable: true })
  rialUntoAmount: number | null;

  @Column({ type: 'character varying', name: 'Comments', nullable: true })
  comments: string | null;

  @Column({ type: 'character varying', name: 'SettleEarmark', nullable: true })
  settleEarmark: string | null;

  @Column({ type: 'bigint', name: 'ShebaNoRef', nullable: true })
  shebaNoRef: number | null;

  @Column({ type: 'character varying', name: 'EventualShbaNo', nullable: true })
  eventualShbaNo: string | null;

  @Column({ type: 'bigint', name: 'DoerSecureFormalAccountRef', nullable: true })
  doerSecureFormalAccountRef: number | null;

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

  @Column({ type: 'numeric', name: 'AssurancePerCent', nullable: true })
  assurancePerCent: number | null;

}