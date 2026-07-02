import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShipmentScheduleItemDetail' })
export class LegacyShipmentScheduleItemDetail {
  @PrimaryColumn({ type: 'bigint', name: 'ShipmentScheduleItemDetailID' })
  shipmentScheduleItemDetailID: number;

  @Column({ type: 'bigint', name: 'ShipmentScheduleRef' })
  shipmentScheduleRef: number;

  @Column({ type: 'bigint', name: 'ShipmentScheduleItemRef' })
  shipmentScheduleItemRef: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'timestamp without time zone', name: 'ExpirationDate' })
  expirationDate: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'NormalQuantity' })
  normalQuantity: number;

  @Column({ type: 'numeric', name: 'ExtraQuantity' })
  extraQuantity: number;

  @Column({ type: 'boolean', name: 'IsUserAssigned' })
  isUserAssigned: boolean;

  @Column({ type: 'integer', name: 'VehicleType1Count' })
  vehicleType1Count: number;

  @Column({ type: 'integer', name: 'VehicleType2Count' })
  vehicleType2Count: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'text', name: 'CalculationContext', nullable: true })
  calculationContext: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'ChangeHistory', nullable: true })
  changeHistory: number | null;

  @Column({ type: 'boolean', name: 'IsManuallyExtended', default: false })
  isManuallyExtended: boolean;

}