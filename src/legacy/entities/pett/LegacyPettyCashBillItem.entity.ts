import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PettyCashBillItem' })
export class LegacyPettyCashBillItem {
  @PrimaryColumn({ type: 'bigint', name: 'PettyCashBillItemID' })
  pettyCashBillItemID: number;

  @Column({ type: 'bigint', name: 'PettyCashBillRef' })
  pettyCashBillRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'character varying', name: 'Number', nullable: true })
  number: string | null;

  @Column({ type: 'numeric', name: 'VATax' })
  vATax: number;

  @Column({ type: 'numeric', name: 'VAToll' })
  vAToll: number;

  @Column({ type: 'numeric', name: 'MandatoryTax' })
  mandatoryTax: number;

  @Column({ type: 'bigint', name: 'CashFlowFactorRef', nullable: true })
  cashFlowFactorRef: number | null;

  @Column({ type: 'bigint', name: 'SLRef', nullable: true })
  sLRef: number | null;

  @Column({ type: 'character varying', name: 'SLCode', nullable: true })
  sLCode: string | null;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

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

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate' })
  operationalCurrencyExchangeRate: number;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyAmount' })
  operationalCurrencyAmount: number;

  @Column({ type: 'character varying', name: 'StandardDescriptionPattern', nullable: true })
  standardDescriptionPattern: string | null;

  @Column({ type: 'integer', name: 'SourceType', nullable: true })
  sourceType: number | null;

  @Column({ type: 'bigint', name: 'SourceRef', nullable: true })
  sourceRef: number | null;

  @Column({ type: 'bigint', name: 'PartyRef', nullable: true })
  partyRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'DL10', nullable: true })
  dL10: string | null;

  @Column({ type: 'character varying', name: 'DL11', nullable: true })
  dL11: string | null;

  @Column({ type: 'character varying', name: 'DL12', nullable: true })
  dL12: string | null;

  @Column({ type: 'character varying', name: 'DL13', nullable: true })
  dL13: string | null;

  @Column({ type: 'character varying', name: 'DL14', nullable: true })
  dL14: string | null;

  @Column({ type: 'character varying', name: 'DL15', nullable: true })
  dL15: string | null;

  @Column({ type: 'character varying', name: 'DL16', nullable: true })
  dL16: string | null;

  @Column({ type: 'character varying', name: 'DL17', nullable: true })
  dL17: string | null;

  @Column({ type: 'character varying', name: 'DL18', nullable: true })
  dL18: string | null;

  @Column({ type: 'character varying', name: 'DL19', nullable: true })
  dL19: string | null;

  @Column({ type: 'character varying', name: 'DL20', nullable: true })
  dL20: string | null;

}