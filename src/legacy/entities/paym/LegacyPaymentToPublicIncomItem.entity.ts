import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PaymentToPublicIncomItem' })
export class LegacyPaymentToPublicIncomItem {
  @PrimaryColumn({ type: 'bigint', name: 'PaymentToPublicIncomItemID' })
  paymentToPublicIncomItemID: number;

  @Column({ type: 'bigint', name: 'TransferToPublicIncomRef' })
  transferToPublicIncomRef: number;

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