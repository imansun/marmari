import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccidentItemInCalculationArea' })
export class LegacyAccidentItemInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'AccidentItemInCalculationAreaID' })
  accidentItemInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'bigint', name: 'AccidentItemRef' })
  accidentItemRef: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}