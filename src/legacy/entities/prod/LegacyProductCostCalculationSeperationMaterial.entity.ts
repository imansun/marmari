import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductCostCalculationSeperationMaterial' })
export class LegacyProductCostCalculationSeperationMaterial {
  @PrimaryColumn({ type: 'bigint', name: 'ProductCostCalculationSeperationMaterialID' })
  productCostCalculationSeperationMaterialID: number;

  @Column({ type: 'bigint', name: 'ProductCostCalculationSeperationRef' })
  productCostCalculationSeperationRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'numeric', name: 'Fee' })
  fee: number;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'bigint', name: 'CalcPeriodRef' })
  calcPeriodRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}