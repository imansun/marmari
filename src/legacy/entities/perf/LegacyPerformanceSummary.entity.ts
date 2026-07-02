import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PerformanceSummary' })
export class LegacyPerformanceSummary {
  @PrimaryColumn({ type: 'bigint', name: 'PerformanceSummaryID' })
  performanceSummaryID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'timestamp without time zone', name: 'FromDate' })
  fromDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ToDate' })
  toDate: Date;

  @Column({ type: 'bigint', name: 'PerformanceSummaryPatternRef' })
  performanceSummaryPatternRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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

  @Column({ type: 'boolean', name: 'SalesAndReceiptPaymentDifference', nullable: true })
  salesAndReceiptPaymentDifference: boolean | null;

  @Column({ type: 'boolean', name: 'IsVouchered', default: false })
  isVouchered: boolean;

  @Column({ type: 'integer', name: 'IssueVoucherDocumentStatus', default: 4 })
  issueVoucherDocumentStatus: number;

}