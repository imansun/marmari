import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssetGroupInCalculationArea' })
export class LegacyAssetGroupInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'AssetGroupInCalculationAreaID' })
  assetGroupInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'AssetGroupRef' })
  assetGroupRef: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'bigint', name: 'DepreciationMethodRef', nullable: true })
  depreciationMethodRef: number | null;

  @Column({ type: 'numeric', name: 'SalvageValue' })
  salvageValue: number;

  @Column({ type: 'numeric', name: 'MaxDepreciationBookValue' })
  maxDepreciationBookValue: number;

  @Column({ type: 'boolean', name: 'IsDepreciable' })
  isDepreciable: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}