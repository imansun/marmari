import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'GasAssetReformItemInCalculationArea' })
export class LegacyGasAssetReformItemInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'GasAssetReformItemInCalculationAreaID' })
  gasAssetReformItemInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'GasAssetReformItemRef' })
  gasAssetReformItemRef: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}