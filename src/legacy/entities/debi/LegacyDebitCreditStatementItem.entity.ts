import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DebitCreditStatementItem' })
export class LegacyDebitCreditStatementItem {
  @PrimaryColumn({ type: 'bigint', name: 'DebitCreditStatementItemID' })
  debitCreditStatementItemID: number;

  @Column({ type: 'bigint', name: 'DebitCreditStatementRef' })
  debitCreditStatementRef: number;

  @Column({ type: 'bigint', name: 'VoucherItemRef' })
  voucherItemRef: number;

  @Column({ type: 'bigint', name: 'VoucherRef' })
  voucherRef: number;

  @Column({ type: 'timestamp without time zone', name: 'VoucherDate' })
  voucherDate: Date;

  @Column({ type: 'integer', name: 'VoucherNumber', nullable: true })
  voucherNumber: number | null;

  @Column({ type: 'integer', name: 'VoucherSequence' })
  voucherSequence: number;

  @Column({ type: 'integer', name: 'VoucherItemRowNumber' })
  voucherItemRowNumber: number;

  @Column({ type: 'numeric', name: 'Debit', nullable: true })
  debit: number | null;

  @Column({ type: 'numeric', name: 'Credit', nullable: true })
  credit: number | null;

  @Column({ type: 'numeric', name: 'TargetCurrencyDebit', nullable: true })
  targetCurrencyDebit: number | null;

  @Column({ type: 'numeric', name: 'TargetCurrencyCredit', nullable: true })
  targetCurrencyCredit: number | null;

  @Column({ type: 'bigint', name: 'TargetCurrencyRef', nullable: true })
  targetCurrencyRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}