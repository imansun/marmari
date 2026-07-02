import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RationableStock' })
export class LegacyRationableStock {
  @PrimaryColumn({ type: 'bigint', name: 'RationableStockID' })
  rationableStockID: number;

  @Column({ type: 'bigint', name: 'RationingPeriodRef' })
  rationingPeriodRef: number;

  @Column({ type: 'bigint', name: 'RationingSettingRef' })
  rationingSettingRef: number;

  @Column({ type: 'integer', name: 'RationLevel' })
  rationLevel: number;

  @Column({ type: 'bigint', name: 'BranchRef', nullable: true })
  branchRef: number | null;

  @Column({ type: 'bigint', name: 'PlantRef', nullable: true })
  plantRef: number | null;

  @Column({ type: 'bigint', name: 'WarehouseRef', nullable: true })
  warehouseRef: number | null;

  @Column({ type: 'bigint', name: 'ProductRef', nullable: true })
  productRef: number | null;

  @Column({ type: 'bigint', name: 'ProductGroupRef', nullable: true })
  productGroupRef: number | null;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'numeric', name: 'SalableStockQuantity' })
  salableStockQuantity: number;

  @Column({ type: 'timestamp without time zone', name: 'SalableStockQuantityCalculationDateTime' })
  salableStockQuantityCalculationDateTime: Date;

  @Column({ type: 'numeric', name: 'ExtraStockQuantity1' })
  extraStockQuantity1: number;

  @Column({ type: 'numeric', name: 'ExtraStockQuantity2' })
  extraStockQuantity2: number;

  @Column({ type: 'numeric', name: 'ExtraStockQuantity3' })
  extraStockQuantity3: number;

  @Column({ type: 'numeric', name: 'ExtraStockQuantity4' })
  extraStockQuantity4: number;

  @Column({ type: 'numeric', name: 'StockQuantityUsagePercent', nullable: true })
  stockQuantityUsagePercent: number | null;

  @Column({ type: 'numeric', name: 'InitialRationableStockQuantity' })
  initialRationableStockQuantity: number;

  @Column({ type: 'numeric', name: 'AdditionReductionQuantity' })
  additionReductionQuantity: number;

  @Column({ type: 'numeric', name: 'RationableStockQuantity' })
  rationableStockQuantity: number;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}