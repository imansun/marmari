import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CashFlowReportEncashedNotesInfo' })
export class LegacyCashFlowReportEncashedNotesInfo {
  @PrimaryColumn({ type: 'bigint', name: 'CashFlowReportEncashedNotesInfoID' })
  cashFlowReportEncashedNotesInfoID: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'character varying', name: 'BaseComponentName' })
  baseComponentName: string;

  @Column({ type: 'character varying', name: 'BaseEntityName' })
  baseEntityName: string;

  @Column({ type: 'bigint', name: 'BaseDocumentID' })
  baseDocumentID: number;

  @Column({ type: 'timestamp without time zone', name: 'BaseDocumentDate' })
  baseDocumentDate: Date;

  @Column({ type: 'integer', name: 'ItemType' })
  itemType: number;

  @Column({ type: 'character varying', name: 'ItemNumber', nullable: true })
  itemNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'ItemDate', nullable: true })
  itemDate: Date | null;

  @Column({ type: 'character varying', name: 'ItemDescription', nullable: true })
  itemDescription: string | null;

  @Column({ type: 'bigint', name: 'CounterPartRef', nullable: true })
  counterPartRef: number | null;

  @Column({ type: 'bigint', name: 'CashFlowFactorRef' })
  cashFlowFactorRef: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'integer', name: 'VoucherSequence', nullable: true })
  voucherSequence: number | null;

  @Column({ type: 'timestamp without time zone', name: 'VoucherDate', nullable: true })
  voucherDate: Date | null;

  @Column({ type: 'boolean', name: 'IsDebit' })
  isDebit: boolean;

  @Column({ type: 'numeric', name: 'Amount', nullable: true })
  amount: number | null;

  @Column({ type: 'bigint', name: 'BankAccountRef', nullable: true })
  bankAccountRef: number | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate' })
  operationalCurrencyExchangeRate: number;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}