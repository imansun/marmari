import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssetInCalculationArea' })
export class LegacyAssetInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'AssetInCalculationAreaID' })
  assetInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'DepreciationType' })
  depreciationType: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'GasState', nullable: true })
  gasState: number | null;

}