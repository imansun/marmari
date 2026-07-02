import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountDebitCreditStatementItem' })
export class LegacyAccountDebitCreditStatementItem {
  @PrimaryColumn({ type: 'bigint', name: 'AccountDebitCreditStatementItemID' })
  accountDebitCreditStatementItemID: number;

  @Column({ type: 'bigint', name: 'AccountDebitCreditStatementRef' })
  accountDebitCreditStatementRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'DebitCurrencyRef' })
  debitCurrencyRef: number;

  @Column({ type: 'bigint', name: 'DebitOwnerPartyRef', nullable: true })
  debitOwnerPartyRef: number | null;

  @Column({ type: 'bigint', name: 'DebitAccountRef', nullable: true })
  debitAccountRef: number | null;

  @Column({ type: 'bigint', name: 'SecondDebitAccountRef', nullable: true })
  secondDebitAccountRef: number | null;

  @Column({ type: 'bigint', name: 'ThirdDebitAccountRef', nullable: true })
  thirdDebitAccountRef: number | null;

  @Column({ type: 'bigint', name: 'DebitSLRef' })
  debitSLRef: number;

  @Column({ type: 'character varying', name: 'DebitDL4', nullable: true })
  debitDL4: string | null;

  @Column({ type: 'character varying', name: 'DebitDL5', nullable: true })
  debitDL5: string | null;

  @Column({ type: 'character varying', name: 'DebitDL6', nullable: true })
  debitDL6: string | null;

  @Column({ type: 'character varying', name: 'DebitDL7', nullable: true })
  debitDL7: string | null;

  @Column({ type: 'character varying', name: 'DebitDL8', nullable: true })
  debitDL8: string | null;

  @Column({ type: 'character varying', name: 'DebitDL9', nullable: true })
  debitDL9: string | null;

  @Column({ type: 'bigint', name: 'CreditCurrencyRef' })
  creditCurrencyRef: number;

  @Column({ type: 'bigint', name: 'CreditOwnerPartyRef', nullable: true })
  creditOwnerPartyRef: number | null;

  @Column({ type: 'bigint', name: 'CreditAccountRef', nullable: true })
  creditAccountRef: number | null;

  @Column({ type: 'bigint', name: 'SecondCreditAccountRef', nullable: true })
  secondCreditAccountRef: number | null;

  @Column({ type: 'bigint', name: 'ThirdCreditAccountRef', nullable: true })
  thirdCreditAccountRef: number | null;

  @Column({ type: 'bigint', name: 'CreditSLRef' })
  creditSLRef: number;

  @Column({ type: 'character varying', name: 'CreditDL4', nullable: true })
  creditDL4: string | null;

  @Column({ type: 'character varying', name: 'CreditDL5', nullable: true })
  creditDL5: string | null;

  @Column({ type: 'character varying', name: 'CreditDL6', nullable: true })
  creditDL6: string | null;

  @Column({ type: 'character varying', name: 'CreditDL7', nullable: true })
  creditDL7: string | null;

  @Column({ type: 'character varying', name: 'CreditDL8', nullable: true })
  creditDL8: string | null;

  @Column({ type: 'character varying', name: 'CreditDL9', nullable: true })
  creditDL9: string | null;

  @Column({ type: 'bigint', name: 'DebitCreditExchangeRateRef', nullable: true })
  debitCreditExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'DebitCreditExchangeRate', nullable: true })
  debitCreditExchangeRate: number | null;

  @Column({ type: 'bigint', name: 'DebitOperationalExchangeRateRef', nullable: true })
  debitOperationalExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'DebitOperationalExchangeRate', nullable: true })
  debitOperationalExchangeRate: number | null;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}