import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CompensationPaymentRequest' })
export class LegacyCompensationPaymentRequest {
  @PrimaryColumn({ type: 'bigint', name: 'CompensationPaymentRequestID' })
  compensationPaymentRequestID: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'PaymentYearMonth' })
  paymentYearMonth: number;

  @Column({ type: 'bigint', name: 'CompensationPaymentRequestTypeRef' })
  compensationPaymentRequestTypeRef: number;

  @Column({ type: 'bigint', name: 'CompensationComplementRequestRef', nullable: true })
  compensationComplementRequestRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'IssueDate' })
  issueDate: Date;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'VoucherSpecificationSLRef' })
  voucherSpecificationSLRef: number;

  @Column({ type: 'character varying', name: 'SLCode' })
  sLCode: string;

  @Column({ type: 'bigint', name: 'CurrencyRef', nullable: true })
  currencyRef: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRateRef', nullable: true })
  currencyRateRef: number | null;

  @Column({ type: 'numeric', name: 'CurrencyRate', nullable: true })
  currencyRate: number | null;

  @Column({ type: 'boolean', name: 'CurrencyIsReverse', default: false })
  currencyIsReverse: boolean;

  @Column({ type: 'timestamp without time zone', name: 'ConfirmDate', nullable: true })
  confirmDate: Date | null;

  @Column({ type: 'bigint', name: 'ConfirmerRef', nullable: true })
  confirmerRef: number | null;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'ExtraParameters', nullable: true })
  extraParameters: string | null;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

}