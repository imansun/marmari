import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RefundableOrDeductiblePaidTaxAndToll' })
export class LegacyRefundableOrDeductiblePaidTaxAndToll {
  @PrimaryColumn({ type: 'bigint', name: 'RefundableOrDeductiblePaidTaxAndTollID' })
  refundableOrDeductiblePaidTaxAndTollID: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'numeric', name: 'PaidTaxFirstAmount' })
  paidTaxFirstAmount: number;

  @Column({ type: 'numeric', name: 'PaidTaxFinalAmount' })
  paidTaxFinalAmount: number;

  @Column({ type: 'numeric', name: 'PaidTollFirstAmount' })
  paidTollFirstAmount: number;

  @Column({ type: 'numeric', name: 'PaidTollFinalAmount' })
  paidTollFinalAmount: number;

  @Column({ type: 'bigint', name: 'VATStatementRef' })
  vATStatementRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}