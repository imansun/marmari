import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShipmentPointParameter' })
export class LegacyShipmentPointParameter {
  @PrimaryColumn({ type: 'bigint', name: 'ShipmentPointParameterID' })
  shipmentPointParameterID: number;

  @Column({ type: 'bigint', name: 'ShipmentPointRef' })
  shipmentPointRef: number;

  @Column({ type: 'bigint', name: 'ShippingPointRef' })
  shippingPointRef: number;

  @Column({ type: 'bigint', name: 'InventoryRef' })
  inventoryRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}