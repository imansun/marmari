import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransferReceivableNote' })
export class LegacyTransferReceivableNote {
  @PrimaryColumn({ type: 'bigint', name: 'TransferReceivableNoteID' })
  transferReceivableNoteID: number;

  @Column({ type: 'bigint', name: 'TransferRef' })
  transferRef: number;

  @Column({ type: 'bigint', name: 'SourceCashRef' })
  sourceCashRef: number;

  @Column({ type: 'bigint', name: 'DestinationCashRef' })
  destinationCashRef: number;

  @Column({ type: 'bigint', name: 'ReceivableNoteRef' })
  receivableNoteRef: number;

  @Column({ type: 'bigint', name: 'ReceivableNoteTransactionRef' })
  receivableNoteTransactionRef: number;

  @Column({ type: 'integer', name: 'NoteType' })
  noteType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'character varying', name: 'StandardDescriptionPattern', nullable: true })
  standardDescriptionPattern: string | null;

}