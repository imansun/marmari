import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PriceFormula' })
export class LegacyPriceFormula {
  @PrimaryColumn({ type: 'bigint', name: 'PriceFormulaID' })
  priceFormulaID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'integer', name: 'NumberOfPeriods' })
  numberOfPeriods: number;

  @Column({ type: 'bigint', name: 'FormulaRef', nullable: true })
  formulaRef: number | null;

  @Column({ type: 'boolean', name: 'IsEffectiveInFeeCalculation' })
  isEffectiveInFeeCalculation: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}