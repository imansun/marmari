import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShipmentPolicy' })
export class LegacyShipmentPolicy {
  @PrimaryColumn({ type: 'bigint', name: 'ShipmentPolicyID' })
  shipmentPolicyID: number;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number;

  @Column({ type: 'bigint', name: 'ShipmentPolicyTemplateRef' })
  shipmentPolicyTemplateRef: number;

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

  @Column({ type: 'bigint', name: 'TransportationVehicleType1Ref' })
  transportationVehicleType1Ref: number;

  @Column({ type: 'bigint', name: 'TransportationVehicleType2Ref', nullable: true })
  transportationVehicleType2Ref: number | null;

  @Column({ type: 'boolean', name: 'CanUseExtraCapacity' })
  canUseExtraCapacity: boolean;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}