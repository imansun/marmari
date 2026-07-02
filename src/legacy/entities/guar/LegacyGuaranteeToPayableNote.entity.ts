import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'GuaranteeToPayableNote' })
export class LegacyGuaranteeToPayableNote {
  @PrimaryColumn({ type: 'bigint', name: 'GuaranteeToPayableNoteID' })
  guaranteeToPayableNoteID: number;

  @Column({ type: 'bigint', name: 'GuaranteeToPayableRef' })
  guaranteeToPayableRef: number;

  @Column({ type: 'bigint', name: 'PayableNoteRef' })
  payableNoteRef: number;

  @Column({ type: 'bigint', name: 'AccountingOperationRef', nullable: true })
  accountingOperationRef: number | null;

  @Column({ type: 'integer', name: 'DurationType', nullable: true })
  durationType: number | null;

  @Column({ type: 'integer', name: 'NoteType' })
  noteType: number;

  @Column({ type: 'bigint', name: 'PayableNoteTransactionRef' })
  payableNoteTransactionRef: number;

  @Column({ type: 'bigint', name: 'CashFlowFactorRef', nullable: true })
  cashFlowFactorRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'DueDate' })
  dueDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'AgreementDate', nullable: true })
  agreementDate: Date | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bigint', name: 'CounterPartRef' })
  counterPartRef: number;

  @Column({ type: 'character varying', name: 'StandardDescriptionPattern', nullable: true })
  standardDescriptionPattern: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}