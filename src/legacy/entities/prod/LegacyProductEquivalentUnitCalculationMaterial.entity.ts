import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductEquivalentUnitCalculationMaterial' })
export class LegacyProductEquivalentUnitCalculationMaterial {
  @PrimaryColumn({ type: 'bigint', name: 'ProductEquivalentUnitCalculationMaterialID' })
  productEquivalentUnitCalculationMaterialID: number;

  @Column({ type: 'bigint', name: 'ProductEquivalentUnitCalculationRef' })
  productEquivalentUnitCalculationRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'numeric', name: 'MaterialProductQuantity' })
  materialProductQuantity: number;

  @Column({ type: 'numeric', name: 'MaterialNormalWastageQuantity' })
  materialNormalWastageQuantity: number;

  @Column({ type: 'numeric', name: 'MaterialAbnormalWastageQuantity' })
  materialAbnormalWastageQuantity: number;

  @Column({ type: 'numeric', name: 'ConsumeStandardQuantity' })
  consumeStandardQuantity: number;

  @Column({ type: 'numeric', name: 'ConsumptionRatio' })
  consumptionRatio: number;

  @Column({ type: 'numeric', name: 'BeginningQuantity' })
  beginningQuantity: number;

  @Column({ type: 'numeric', name: 'EndingQuantity' })
  endingQuantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}