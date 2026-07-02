import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Transaction' })
export class LegacyTransaction {
  @PrimaryColumn({ type: 'bigint', name: 'TransactionID' })
  transactionID: number;

  @Column({ type: 'bigint', name: 'ParentTransactionRef', nullable: true })
  parentTransactionRef: number | null;

  @Column({ type: 'character varying', name: 'ReferenceTypeComponentName', nullable: true })
  referenceTypeComponentName: string | null;

  @Column({ type: 'character varying', name: 'ReferenceTypeEntityName', nullable: true })
  referenceTypeEntityName: string | null;

  @Column({ type: 'character varying', name: 'ReferenceItemTypeEntityName', nullable: true })
  referenceItemTypeEntityName: string | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'bigint', name: 'ReferenceItemRef', nullable: true })
  referenceItemRef: number | null;

  @Column({ type: 'character varying', name: 'EntryType', nullable: true })
  entryType: string | null;

  @Column({ type: 'bigint', name: 'EntryRef', nullable: true })
  entryRef: number | null;

  @Column({ type: 'integer', name: 'Effect' })
  effect: number;

  @Column({ type: 'numeric', name: 'EntryAmount' })
  entryAmount: number;

  @Column({ type: 'numeric', name: 'InitialQuantity', nullable: true })
  initialQuantity: number | null;

  @Column({ type: 'numeric', name: 'Quantity', nullable: true })
  quantity: number | null;

  @Column({ type: 'numeric', name: 'Fee', nullable: true })
  fee: number | null;

  @Column({ type: 'numeric', name: 'GLAmount' })
  gLAmount: number;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate', nullable: true })
  operationalCurrencyExchangeRate: number | null;

  @Column({ type: 'boolean', name: 'OperationalCurrencyExchangeRateIsReverse', nullable: true })
  operationalCurrencyExchangeRateIsReverse: boolean | null;

  @Column({ type: 'bigint', name: 'AccountRef' })
  accountRef: number;

  @Column({ type: 'timestamp without time zone', name: 'BookingDate' })
  bookingDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'SettlementDate' })
  settlementDate: Date;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'text', name: 'ExtraData', nullable: true })
  extraData: string | null;

  @Column({ type: 'bigint', name: 'ReserveReferenceType', nullable: true })
  reserveReferenceType: number | null;

  @Column({ type: 'bigint', name: 'ReserveReferenceID', nullable: true })
  reserveReferenceID: number | null;

  @Column({ type: 'bigint', name: 'UserRef', nullable: true })
  userRef: number | null;

  @Column({ type: 'boolean', name: 'IsCredit' })
  isCredit: boolean;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'bigint', name: 'AffectingTransactionRef', nullable: true })
  affectingTransactionRef: number | null;

  @Column({ type: 'boolean', name: 'FeeQuantityConverted', nullable: true, default: true })
  feeQuantityConverted: boolean | null;

  @Column({ type: 'integer', name: 'AnalyzeEntityCode', nullable: true })
  analyzeEntityCode: number | null;

  @Column({ type: 'bigint', name: 'AnalyzeEntityRef', nullable: true })
  analyzeEntityRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}