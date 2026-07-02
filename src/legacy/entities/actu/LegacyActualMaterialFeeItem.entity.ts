import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ActualMaterialFeeItem' })
export class LegacyActualMaterialFeeItem {
  @PrimaryColumn({ type: 'bigint', name: 'ActualMaterialFeeItemID' })
  actualMaterialFeeItemID: number;

  @Column({ type: 'bigint', name: 'ActualMaterialFeeRef' })
  actualMaterialFeeRef: number;

  @Column({ type: 'bigint', name: 'InputTransactionItemRef' })
  inputTransactionItemRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}