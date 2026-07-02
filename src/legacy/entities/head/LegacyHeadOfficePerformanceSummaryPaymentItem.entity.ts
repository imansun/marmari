import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HeadOfficePerformanceSummaryPaymentItem' })
export class LegacyHeadOfficePerformanceSummaryPaymentItem {
  @PrimaryColumn({ type: 'bigint', name: 'HeadOfficePerformanceSummaryPaymentItemID' })
  headOfficePerformanceSummaryPaymentItemID: number;

  @Column({ type: 'bigint', name: 'HeadOfficePerformanceSummaryPaymentRef' })
  headOfficePerformanceSummaryPaymentRef: number;

  @Column({ type: 'boolean', name: 'IsTransferred' })
  isTransferred: boolean;

  @Column({ type: 'bigint', name: 'CustomerRef', nullable: true })
  customerRef: number | null;

  @Column({ type: 'character varying', name: 'NatureKey' })
  natureKey: string;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'bigint', name: 'DataRef', nullable: true })
  dataRef: number | null;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'bigint', name: 'BankAccountRef', nullable: true })
  bankAccountRef: number | null;

  @Column({ type: 'integer', name: 'PaymentType' })
  paymentType: number;

  @Column({ type: 'timestamp without time zone', name: 'DepositDate', nullable: true })
  depositDate: Date | null;

  @Column({ type: 'character varying', name: 'ReceiptNumber', nullable: true })
  receiptNumber: string | null;

  @Column({ type: 'character varying', name: 'TerminalNumber', nullable: true })
  terminalNumber: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'SettlementType', nullable: true })
  settlementType: number | null;

  @Column({ type: 'bigint', name: 'ProductCouponProviderRef', nullable: true })
  productCouponProviderRef: number | null;

  @Column({ type: 'integer', name: 'PaymentProvider', nullable: true })
  paymentProvider: number | null;

}