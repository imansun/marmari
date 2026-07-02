import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Rationing' })
export class LegacyRationing {
  @PrimaryColumn({ type: 'bigint', name: 'RationingID' })
  rationingID: number;

  @Column({ type: 'bigint', name: 'RationableStockRef' })
  rationableStockRef: number;

  @Column({ type: 'bigint', name: 'RationingSettingRef' })
  rationingSettingRef: number;

  @Column({ type: 'bigint', name: 'RationingPeriodRef' })
  rationingPeriodRef: number;

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

  @Column({ type: 'numeric', name: 'AdditionReductionQuantity' })
  additionReductionQuantity: number;

  @Column({ type: 'numeric', name: 'RationableStockQuantity' })
  rationableStockQuantity: number;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}