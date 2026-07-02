import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PaymentOrderDeliverRestorePayableNote' })
export class LegacyPaymentOrderDeliverRestorePayableNote {
  @PrimaryColumn({ type: 'bigint', name: 'PaymentOrderDeliverRestorePayableNoteID' })
  paymentOrderDeliverRestorePayableNoteID: number;

  @Column({ type: 'bigint', name: 'PaymentOrderRef' })
  paymentOrderRef: number;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'PayableNoteRef' })
  payableNoteRef: number;

  @Column({ type: 'bigint', name: 'AccountingOperationRef', nullable: true })
  accountingOperationRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'DueDate', nullable: true })
  dueDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'AgreementDate', nullable: true })
  agreementDate: Date | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'DurationType', nullable: true })
  durationType: number | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bigint', name: 'CashFlowFactorRef', nullable: true })
  cashFlowFactorRef: number | null;

  @Column({ type: 'integer', name: 'NoteType' })
  noteType: number;

  @Column({ type: 'character varying', name: 'StandardDescriptionPattern', nullable: true })
  standardDescriptionPattern: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'PayableNoteTransactionRef', nullable: true })
  payableNoteTransactionRef: number | null;

}