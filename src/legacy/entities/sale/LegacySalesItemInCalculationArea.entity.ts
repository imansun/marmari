import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesItemInCalculationArea' })
export class LegacySalesItemInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'SalesItemInCalculationAreaID' })
  salesItemInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'SalesItemRef' })
  salesItemRef: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'numeric', name: 'SalesCostAndBenefit' })
  salesCostAndBenefit: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}