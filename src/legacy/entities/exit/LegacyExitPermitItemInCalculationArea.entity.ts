import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ExitPermitItemInCalculationArea' })
export class LegacyExitPermitItemInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'ExitPermitItemInCalculationAreaID' })
  exitPermitItemInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'ExitPermitItemRef' })
  exitPermitItemRef: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}