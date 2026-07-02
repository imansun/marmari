import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductCostCalculationMaterialDetail' })
export class LegacyProductCostCalculationMaterialDetail {
  @PrimaryColumn({ type: 'bigint', name: 'ProductCostCalculationMaterialDetailID' })
  productCostCalculationMaterialDetailID: number;

  @Column({ type: 'bigint', name: 'ProductCostCalculationMaterialRef' })
  productCostCalculationMaterialRef: number;

  @Column({ type: 'bigint', name: 'WorkstationRef', nullable: true })
  workstationRef: number | null;

  @Column({ type: 'bigint', name: 'BillOfMaterialRef', nullable: true })
  billOfMaterialRef: number | null;

  @Column({ type: 'bigint', name: 'InputTransactionSourceRef' })
  inputTransactionSourceRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'numeric', name: 'FeeStandard' })
  feeStandard: number;

  @Column({ type: 'numeric', name: 'FeeActual' })
  feeActual: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'ActualConsumptionQuantity' })
  actualConsumptionQuantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}