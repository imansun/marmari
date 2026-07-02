import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ManufacturingOrderOperationMaterialTerminalInputOrder' })
export class LegacyManufacturingOrderOperationMaterialTerminalInputOrder {
  @PrimaryColumn({ type: 'bigint', name: 'ManufacturingOrderOperationMaterialTerminalInputOrderID' })
  manufacturingOrderOperationMaterialTerminalInputOrderID: number;

  @Column({ type: 'bigint', name: 'ManufacturingOrderOperationMaterialRef' })
  manufacturingOrderOperationMaterialRef: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}