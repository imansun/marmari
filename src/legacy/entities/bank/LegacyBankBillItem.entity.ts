import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BankBillItem' })
export class LegacyBankBillItem {
  @PrimaryColumn({ type: 'bigint', name: 'BankBillItemID' })
  bankBillItemID: number;

  @Column({ type: 'bigint', name: 'BankBillRef' })
  bankBillRef: number;

  @Column({ type: 'numeric', name: 'Debit', nullable: true })
  debit: number | null;

  @Column({ type: 'numeric', name: 'Credit', nullable: true })
  credit: number | null;

  @Column({ type: 'character varying', name: 'DocumentNumber' })
  documentNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'DocumentDate' })
  documentDate: Date;

  @Column({ type: 'character varying', name: 'Depositor', nullable: true })
  depositor: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'character', name: 'Identifier', nullable: true })
  identifier: string | null;

  @Column({ type: 'character varying', name: 'BankingServiceTransactionNO', nullable: true })
  bankingServiceTransactionNO: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}