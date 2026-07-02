import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BankTransferReceivableNote' })
export class LegacyBankTransferReceivableNote {
  @PrimaryColumn({ type: 'bigint', name: 'BankTransferReceivableNoteID' })
  bankTransferReceivableNoteID: number;

  @Column({ type: 'bigint', name: 'ReceivableNoteRef' })
  receivableNoteRef: number;

  @Column({ type: 'bigint', name: 'BankTransferRef' })
  bankTransferRef: number;

  @Column({ type: 'integer', name: 'DurationType', nullable: true })
  durationType: number | null;

  @Column({ type: 'integer', name: 'NoteType' })
  noteType: number;

  @Column({ type: 'bigint', name: 'ReceivableNoteTransactionRef' })
  receivableNoteTransactionRef: number;

  @Column({ type: 'bigint', name: 'AccountingOperationRef' })
  accountingOperationRef: number;

  @Column({ type: 'boolean', name: 'DisketteIssued', default: false })
  disketteIssued: boolean;

  @Column({ type: 'character varying', name: 'DL4', nullable: true })
  dL4: string | null;

  @Column({ type: 'character varying', name: 'DL5', nullable: true })
  dL5: string | null;

  @Column({ type: 'character varying', name: 'DL6', nullable: true })
  dL6: string | null;

  @Column({ type: 'character varying', name: 'DL7', nullable: true })
  dL7: string | null;

  @Column({ type: 'character varying', name: 'DL8', nullable: true })
  dL8: string | null;

  @Column({ type: 'character varying', name: 'DL9', nullable: true })
  dL9: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'character varying', name: 'StandardDescriptionPattern', nullable: true })
  standardDescriptionPattern: string | null;

}