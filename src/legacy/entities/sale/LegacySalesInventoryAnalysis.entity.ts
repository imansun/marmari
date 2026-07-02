import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesInventoryAnalysis' })
export class LegacySalesInventoryAnalysis {
  @PrimaryColumn({ type: 'bigint', name: 'SalesInventoryAnalysisID' })
  salesInventoryAnalysisID: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherRef' })
  inventoryVoucherRef: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherItemRef' })
  inventoryVoucherItemRef: number;

  @Column({ type: 'bigint', name: 'TrackingFactorValueRef', nullable: true })
  trackingFactorValueRef: number | null;

  @Column({ type: 'numeric', name: 'FreeQuantityByMajorUnit' })
  freeQuantityByMajorUnit: number;

  @Column({ type: 'numeric', name: 'OrdinaryQuantityByMajorUnit' })
  ordinaryQuantityByMajorUnit: number;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}