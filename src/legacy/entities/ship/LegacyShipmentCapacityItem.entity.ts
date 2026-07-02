import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShipmentCapacityItem' })
export class LegacyShipmentCapacityItem {
  @PrimaryColumn({ type: 'bigint', name: 'ShipmentCapacityItemID' })
  shipmentCapacityItemID: number;

  @Column({ type: 'bigint', name: 'ShipmentCapacityRef' })
  shipmentCapacityRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'numeric', name: 'Capacity' })
  capacity: number;

  @Column({ type: 'numeric', name: 'ProductionAmount' })
  productionAmount: number;

  @Column({ type: 'numeric', name: 'ExtraCapacityPercent' })
  extraCapacityPercent: number;

  @Column({ type: 'numeric', name: 'Efficiency' })
  efficiency: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}