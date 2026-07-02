import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PettyCashTransaction' })
export class LegacyPettyCashTransaction {
  @PrimaryColumn({ type: 'bigint', name: 'PettyCashTransactionID' })
  pettyCashTransactionID: number;

  @Column({ type: 'bigint', name: 'PettyCashRef' })
  pettyCashRef: number;

  @Column({ type: 'numeric', name: 'Debit' })
  debit: number;

  @Column({ type: 'numeric', name: 'Credit' })
  credit: number;

  @Column({ type: 'numeric', name: 'OperationalCurrencyAmount' })
  operationalCurrencyAmount: number;

  @Column({ type: 'integer', name: 'DocumentType' })
  documentType: number;

  @Column({ type: 'bigint', name: 'DocumentRef', nullable: true })
  documentRef: number | null;

  @Column({ type: 'character varying', name: 'DocumentNumber', nullable: true })
  documentNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'DocumentDate' })
  documentDate: Date;

  @Column({ type: 'character varying', name: 'DocumentDescription', nullable: true })
  documentDescription: string | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bigint', name: 'PettyCashCardRef', nullable: true })
  pettyCashCardRef: number | null;

}