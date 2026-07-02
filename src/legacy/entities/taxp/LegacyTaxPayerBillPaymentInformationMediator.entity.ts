import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxPayerBillPaymentInformationMediator' })
export class LegacyTaxPayerBillPaymentInformationMediator {
  @PrimaryColumn({ type: 'bigint', name: 'TaxPayerBillPaymentInformationMediatorID' })
  taxPayerBillPaymentInformationMediatorID: number;

  @Column({ type: 'character varying', name: 'SettlementNatureKey', nullable: true })
  settlementNatureKey: string | null;

  @Column({ type: 'integer', name: 'SalesOnCreditOrCash', nullable: true })
  salesOnCreditOrCash: number | null;

  @Column({ type: 'integer', name: 'PaymentType' })
  paymentType: number;

  @Column({ type: 'bigint', name: 'TaxPayerBillRef' })
  taxPayerBillRef: number;

  @Column({ type: 'bigint', name: 'DocumentRef' })
  documentRef: number;

  @Column({ type: 'bigint', name: 'ReturnInvoiceRef', nullable: true })
  returnInvoiceRef: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'ActionType' })
  actionType: number;

  @Column({ type: 'numeric', name: 'CashPaymentAmountChange', nullable: true })
  cashPaymentAmountChange: number | null;

  @Column({ type: 'numeric', name: 'LoanPaymentAmountChange', nullable: true })
  loanPaymentAmountChange: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}