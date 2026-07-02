import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ChequePattern' })
export class LegacyChequePattern {
  @PrimaryColumn({ type: 'bigint', name: 'ChequePatternID' })
  chequePatternID: number;

  @Column({ type: 'character varying', name: 'ReportPath' })
  reportPath: string;

  @Column({ type: 'bigint', name: 'BankRef' })
  bankRef: number;

  @Column({ type: 'boolean', name: 'PrintNumericDate', default: false })
  printNumericDate: boolean;

  @Column({ type: 'character varying', name: 'AlphabeticPriceEndPhrase', nullable: true })
  alphabeticPriceEndPhrase: string | null;

  @Column({ type: 'character varying', name: 'NumericPriceEndPhrase', nullable: true })
  numericPriceEndPhrase: string | null;

  @Column({ type: 'character varying', name: 'DefaultConstantPhrase', nullable: true })
  defaultConstantPhrase: string | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'PrintPreforated', default: false })
  printPreforated: boolean;

  @Column({ type: 'boolean', name: 'PrintPreforatedNumericalPrice', default: false })
  printPreforatedNumericalPrice: boolean;

  @Column({ type: 'boolean', name: 'PrintPreforatedAlphabeticalPrice', default: false })
  printPreforatedAlphabeticalPrice: boolean;

  @Column({ type: 'boolean', name: 'PrintPreforatedDate', default: false })
  printPreforatedDate: boolean;

  @Column({ type: 'boolean', name: 'PrintPreforatedChequeNo', default: false })
  printPreforatedChequeNo: boolean;

  @Column({ type: 'character varying', name: 'PreforatedPriceStartEndPhrase', nullable: true })
  preforatedPriceStartEndPhrase: string | null;

  @Column({ type: 'text', name: 'Template', nullable: true })
  template: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsStandard' })
  isStandard: boolean;

  @Column({ type: 'character varying', name: 'NumericPriceRemainPhrase', nullable: true })
  numericPriceRemainPhrase: string | null;

  @Column({ type: 'integer', name: 'State', default: 1 })
  state: number;

}