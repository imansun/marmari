import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssetDepreciationItemInCalculationArea' })
export class LegacyAssetDepreciationItemInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'AssetDepreciationItemInCalculationAreaID' })
  assetDepreciationItemInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'AssetDepreciationItemRef' })
  assetDepreciationItemRef: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'numeric', name: 'DepreciationValue' })
  depreciationValue: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}