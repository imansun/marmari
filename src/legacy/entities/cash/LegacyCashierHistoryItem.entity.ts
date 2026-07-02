import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CashierHistoryItem' })
export class LegacyCashierHistoryItem {
  @PrimaryColumn({ type: 'bigint', name: 'CashierHistoryItemID' })
  cashierHistoryItemID: number;

  @Column({ type: 'bigint', name: 'CashierHistoryRef' })
  cashierHistoryRef: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'integer', name: 'ItemType', nullable: true })
  itemType: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}