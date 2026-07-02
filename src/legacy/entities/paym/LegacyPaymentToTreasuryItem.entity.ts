import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PaymentToTreasuryItem' })
export class LegacyPaymentToTreasuryItem {
  @PrimaryColumn({ type: 'bigint', name: 'PaymentToTreasuryItemID' })
  paymentToTreasuryItemID: number;

  @Column({ type: 'bigint', name: 'TransferToTreasuryRef' })
  transferToTreasuryRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'integer', name: 'PaymentMethod' })
  paymentMethod: number;

  @Column({ type: 'bigint', name: 'BankAccountRef' })
  bankAccountRef: number;

  @Column({ type: 'numeric', name: 'Amount', nullable: true })
  amount: number | null;

  @Column({ type: 'bigint', name: 'CounterPartRef', nullable: true })
  counterPartRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}