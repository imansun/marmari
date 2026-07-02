import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TemporaryExitItemInCalculationArea' })
export class LegacyTemporaryExitItemInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'TemporaryExitItemInCalculationAreaID' })
  temporaryExitItemInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'TemporaryExitItemRef' })
  temporaryExitItemRef: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'boolean', name: 'IsReturn' })
  isReturn: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}