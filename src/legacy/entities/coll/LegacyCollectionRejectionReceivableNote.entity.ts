import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CollectionRejectionReceivableNote' })
export class LegacyCollectionRejectionReceivableNote {
  @PrimaryColumn({ type: 'bigint', name: 'CollectionRejectionReceivableNoteID' })
  collectionRejectionReceivableNoteID: number;

  @Column({ type: 'bigint', name: 'ReceivableNoteRef' })
  receivableNoteRef: number;

  @Column({ type: 'bigint', name: 'CollectionRejectionRef' })
  collectionRejectionRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'integer', name: 'DurationType', nullable: true })
  durationType: number | null;

  @Column({ type: 'bigint', name: 'AccountingOperationRef', nullable: true })
  accountingOperationRef: number | null;

  @Column({ type: 'integer', name: 'NoteType' })
  noteType: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'ReceivableNoteTransactionRef' })
  receivableNoteTransactionRef: number;

  @Column({ type: 'bigint', name: 'CashRef', nullable: true })
  cashRef: number | null;

  @Column({ type: 'bigint', name: 'BankTransferReceivableNoteRef' })
  bankTransferReceivableNoteRef: number;

  @Column({ type: 'character varying', name: 'BankTransferNumber' })
  bankTransferNumber: string;

  @Column({ type: 'boolean', name: 'IsProsecuted' })
  isProsecuted: boolean;

  @Column({ type: 'character varying', name: 'StandardDescriptionPattern', nullable: true })
  standardDescriptionPattern: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'SourceType', nullable: true })
  sourceType: number | null;

  @Column({ type: 'bigint', name: 'SourceRef', nullable: true })
  sourceRef: number | null;

}