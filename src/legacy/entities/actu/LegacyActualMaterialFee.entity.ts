import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ActualMaterialFee' })
export class LegacyActualMaterialFee {
  @PrimaryColumn({ type: 'bigint', name: 'ActualMaterialFeeID' })
  actualMaterialFeeID: number;

  @Column({ type: 'bigint', name: 'CostCenterExRef' })
  costCenterExRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}