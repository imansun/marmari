import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShipmentPriorityParameter' })
export class LegacyShipmentPriorityParameter {
  @PrimaryColumn({ type: 'bigint', name: 'ShipmentPriorityParameterID' })
  shipmentPriorityParameterID: number;

  @Column({ type: 'bigint', name: 'ShipmentPriorityRef' })
  shipmentPriorityRef: number;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'integer', name: 'Parameter' })
  parameter: number;

  @Column({ type: 'boolean', name: 'IsEffective' })
  isEffective: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}