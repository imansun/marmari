import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PaymentInformationItem' })
export class LegacyPaymentInformationItem {
  @PrimaryColumn({ type: 'bigint', name: 'PaymentInformationItemID' })
  paymentInformationItemID: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'BudgetEntityRef' })
  budgetEntityRef: number;

  @Column({ type: 'integer', name: 'PaymentMethod', nullable: true })
  paymentMethod: number | null;

  @Column({ type: 'bigint', name: 'CounterPartRef', nullable: true })
  counterPartRef: number | null;

  @Column({ type: 'bigint', name: 'BankAccountRef', nullable: true })
  bankAccountRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'Amount', nullable: true })
  amount: number | null;

  @Column({ type: 'integer', name: 'DurationType', nullable: true })
  durationType: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'PaymentActionType' })
  paymentActionType: number;

}