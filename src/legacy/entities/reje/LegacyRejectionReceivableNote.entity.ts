import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RejectionReceivableNote' })
export class LegacyRejectionReceivableNote {
  @PrimaryColumn({ type: 'bigint', name: 'RejectionReceivableNoteID' })
  rejectionReceivableNoteID: number;

  @Column({ type: 'bigint', name: 'RejectionRef' })
  rejectionRef: number;

  @Column({ type: 'bigint', name: 'ReceivableNoteRef' })
  receivableNoteRef: number;

  @Column({ type: 'bigint', name: 'ReceivableNoteTransactionRef' })
  receivableNoteTransactionRef: number;

  @Column({ type: 'integer', name: 'NoteType' })
  noteType: number;

  @Column({ type: 'bigint', name: 'AccountingOperationRef' })
  accountingOperationRef: number;

  @Column({ type: 'bigint', name: 'CashRef' })
  cashRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'character varying', name: 'StandardDescriptionPattern', nullable: true })
  standardDescriptionPattern: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}