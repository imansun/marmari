import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShipmentCapacity' })
export class LegacyShipmentCapacity {
  @PrimaryColumn({ type: 'bigint', name: 'ShipmentCapacityID' })
  shipmentCapacityID: number;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'ShipmentPointRef' })
  shipmentPointRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'EntityUnitRef' })
  entityUnitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}