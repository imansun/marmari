import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherPricingFailureLog' })
export class LegacyVoucherPricingFailureLog {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherPricingFailureLogID' })
  voucherPricingFailureLogID: number;

  @Column({ type: 'bigint', name: 'LandedCostRef' })
  landedCostRef: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherItemRef' })
  inventoryVoucherItemRef: number;

  @Column({ type: 'integer', name: 'CounterpartEntityCode', nullable: true })
  counterpartEntityCode: number | null;

  @Column({ type: 'bigint', name: 'CounterpartEntityRef', nullable: true })
  counterpartEntityRef: number | null;

  @Column({ type: 'numeric', name: 'CurrentFee', nullable: true })
  currentFee: number | null;

  @Column({ type: 'numeric', name: 'CurrentPrice', nullable: true })
  currentPrice: number | null;

  @Column({ type: 'numeric', name: 'SentFee', nullable: true })
  sentFee: number | null;

  @Column({ type: 'numeric', name: 'SentPrice', nullable: true })
  sentPrice: number | null;

  @Column({ type: 'integer', name: 'AccountingState', nullable: true })
  accountingState: number | null;

  @Column({ type: 'character varying', name: 'AccountingStateTitle', nullable: true })
  accountingStateTitle: string | null;

  @Column({ type: 'character varying', name: 'FailureReason', nullable: true })
  failureReason: string | null;

}