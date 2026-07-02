import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PaymentOrderRestoreReceivableNote' })
export class LegacyPaymentOrderRestoreReceivableNote {
  @PrimaryColumn({ type: 'bigint', name: 'PaymentOrderRestoreReceivableNoteID' })
  paymentOrderRestoreReceivableNoteID: number;

  @Column({ type: 'bigint', name: 'PaymentOrderRef' })
  paymentOrderRef: number;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'bigint', name: 'ReceivableNoteRef' })
  receivableNoteRef: number;

  @Column({ type: 'bigint', name: 'CashFlowFactorRef', nullable: true })
  cashFlowFactorRef: number | null;

  @Column({ type: 'bigint', name: 'CounterPartRef' })
  counterPartRef: number;

  @Column({ type: 'integer', name: 'NoteType' })
  noteType: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bigint', name: 'ReceivableNoteTransactionRef' })
  receivableNoteTransactionRef: number;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}