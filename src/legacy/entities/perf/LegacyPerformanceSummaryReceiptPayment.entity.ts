import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PerformanceSummaryReceiptPayment' })
export class LegacyPerformanceSummaryReceiptPayment {
  @PrimaryColumn({ type: 'bigint', name: 'PerformanceSummaryReceiptPaymentID' })
  performanceSummaryReceiptPaymentID: number;

  @Column({ type: 'bigint', name: 'PerformanceSummaryRef' })
  performanceSummaryRef: number;

  @Column({ type: 'bigint', name: 'ManagerRef', nullable: true })
  managerRef: number | null;

  @Column({ type: 'bigint', name: 'SupervisorRef', nullable: true })
  supervisorRef: number | null;

  @Column({ type: 'bigint', name: 'CashierRef', nullable: true })
  cashierRef: number | null;

  @Column({ type: 'bigint', name: 'CustomerRef', nullable: true })
  customerRef: number | null;

  @Column({ type: 'bigint', name: 'ParentCustomerRef', nullable: true })
  parentCustomerRef: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'character varying', name: 'Param1', nullable: true })
  param1: string | null;

  @Column({ type: 'character varying', name: 'Param2', nullable: true })
  param2: string | null;

  @Column({ type: 'character varying', name: 'Param3', nullable: true })
  param3: string | null;

  @Column({ type: 'bigint', name: 'PerformanceSummaryPatternReceiptPaymentRef' })
  performanceSummaryPatternReceiptPaymentRef: number;

  @Column({ type: 'integer', name: 'DocumentType' })
  documentType: number;

  @Column({ type: 'character varying', name: 'NatureKey' })
  natureKey: string;

  @Column({ type: 'bigint', name: 'SettlementMethodRef', nullable: true })
  settlementMethodRef: number | null;

  @Column({ type: 'numeric', name: 'ReceivedAmount' })
  receivedAmount: number;

  @Column({ type: 'numeric', name: 'PaidAmount' })
  paidAmount: number;

  @Column({ type: 'numeric', name: 'DeficitAmount', nullable: true })
  deficitAmount: number | null;

  @Column({ type: 'numeric', name: 'SurplusAmount', nullable: true })
  surplusAmount: number | null;

  @Column({ type: 'bigint', name: 'RetailInteriorSectionRef', nullable: true })
  retailInteriorSectionRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'CouponAllocatedCustomerRef', nullable: true })
  couponAllocatedCustomerRef: number | null;

}