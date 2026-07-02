import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SettlementSummary' })
export class LegacySettlementSummary {
  @PrimaryColumn({ type: 'bigint', name: 'SettlementSummaryID' })
  settlementSummaryID: number;

  @Column({ type: 'bigint', name: 'SettlementRef' })
  settlementRef: number;

  @Column({ type: 'numeric', name: 'TotalAmount' })
  totalAmount: number;

  @Column({ type: 'character varying', name: 'NatureKey' })
  natureKey: string;

  @Column({ type: 'integer', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'numeric', name: 'Deficit' })
  deficit: number;

  @Column({ type: 'numeric', name: 'Surplus' })
  surplus: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}