import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LetterOfCredit' })
export class LegacyLetterOfCredit {
  @PrimaryColumn({ type: 'bigint', name: 'LetterOfCreditID' })
  letterOfCreditID: number;

  @Column({ type: 'bigint', name: 'OrderRef' })
  orderRef: number;

  @Column({ type: 'character varying', name: 'CreditNumber' })
  creditNumber: string;

  @Column({ type: 'integer', name: 'CreditType' })
  creditType: number;

  @Column({ type: 'numeric', name: 'CreditAmount' })
  creditAmount: number;

  @Column({ type: 'bigint', name: 'NominatedBankRef', nullable: true })
  nominatedBankRef: number | null;

  @Column({ type: 'bigint', name: 'IssuingBankRef' })
  issuingBankRef: number;

  @Column({ type: 'timestamp without time zone', name: 'IssuingDate' })
  issuingDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ExpiryDate' })
  expiryDate: Date;

  @Column({ type: 'numeric', name: 'InAdvanceAmount', nullable: true })
  inAdvanceAmount: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate', nullable: true })
  operationalCurrencyExchangeRate: number | null;

  @Column({ type: 'boolean', name: 'IsDirectCurrencyExchange', nullable: true })
  isDirectCurrencyExchange: boolean | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'integer', name: 'PaymentSource' })
  paymentSource: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'PurchasingDepartmentRef' })
  purchasingDepartmentRef: number;

  @Column({ type: 'bigint', name: 'ContractRef', nullable: true })
  contractRef: number | null;

}