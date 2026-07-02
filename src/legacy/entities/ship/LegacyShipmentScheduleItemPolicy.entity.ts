import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShipmentScheduleItemPolicy' })
export class LegacyShipmentScheduleItemPolicy {
  @PrimaryColumn({ type: 'bigint', name: 'ShipmentScheduleItemPolicyID' })
  shipmentScheduleItemPolicyID: number;

  @Column({ type: 'bigint', name: 'ShipmentScheduleItemRef' })
  shipmentScheduleItemRef: number;

  @Column({ type: 'integer', name: 'TotalDuration' })
  totalDuration: number;

  @Column({ type: 'integer', name: 'Recurrence' })
  recurrence: number;

  @Column({ type: 'numeric', name: 'DailyQuota', nullable: true })
  dailyQuota: number | null;

  @Column({ type: 'numeric', name: 'DailyQuotaPercentage', nullable: true })
  dailyQuotaPercentage: number | null;

  @Column({ type: 'bigint', name: 'EntityUnitRef', nullable: true })
  entityUnitRef: number | null;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'bigint', name: 'TransportationVehicleType1Ref', nullable: true })
  transportationVehicleType1Ref: number | null;

  @Column({ type: 'bigint', name: 'TransportationVehicleType2Ref', nullable: true })
  transportationVehicleType2Ref: number | null;

  @Column({ type: 'boolean', name: 'CanUseExtraCapacity' })
  canUseExtraCapacity: boolean;

  @Column({ type: 'character varying', name: 'ReferenceNumber' })
  referenceNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'ReferenceDate' })
  referenceDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ReferenceDeliveryDate' })
  referenceDeliveryDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ReferenceExpirationDate', nullable: true })
  referenceExpirationDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}