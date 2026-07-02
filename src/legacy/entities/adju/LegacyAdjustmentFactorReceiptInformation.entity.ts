import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AdjustmentFactorReceiptInformation' })
export class LegacyAdjustmentFactorReceiptInformation {
  @PrimaryColumn({ type: 'bigint', name: 'AdjustmentFactorReceiptInformationID' })
  adjustmentFactorReceiptInformationID: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'AdjustmentFactorManagementRef' })
  adjustmentFactorManagementRef: number;

  @Column({ type: 'bigint', name: 'CounterPartRef', nullable: true })
  counterPartRef: number | null;

  @Column({ type: 'bigint', name: 'BankAccountRef', nullable: true })
  bankAccountRef: number | null;

  @Column({ type: 'bigint', name: 'PartyBankAccountRef', nullable: true })
  partyBankAccountRef: number | null;

  @Column({ type: 'character varying', name: 'ChequeNumber', nullable: true })
  chequeNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'ChequeDate', nullable: true })
  chequeDate: Date | null;

  @Column({ type: 'numeric', name: 'Amount', nullable: true })
  amount: number | null;

  @Column({ type: 'integer', name: 'ReceiptMethod', nullable: true })
  receiptMethod: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'DurationType', nullable: true })
  durationType: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'ReceiptActionType' })
  receiptActionType: number;

}