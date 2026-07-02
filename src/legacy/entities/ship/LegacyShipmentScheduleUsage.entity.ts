import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShipmentScheduleUsage' })
export class LegacyShipmentScheduleUsage {
  @PrimaryColumn({ type: 'bigint', name: 'ShipmentScheduleUsageID' })
  shipmentScheduleUsageID: number;

  @Column({ type: 'bigint', name: 'ShipmentScheduleItemRef' })
  shipmentScheduleItemRef: number;

  @Column({ type: 'bigint', name: 'ShipmentScheduleItemDetailRef' })
  shipmentScheduleItemDetailRef: number;

  @Column({ type: 'integer', name: 'ReferenceEntityCode' })
  referenceEntityCode: number;

  @Column({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'ActualQuantity' })
  actualQuantity: number;

  @Column({ type: 'bigint', name: 'EntityUnitRef' })
  entityUnitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}