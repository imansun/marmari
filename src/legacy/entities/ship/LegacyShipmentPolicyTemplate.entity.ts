import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShipmentPolicyTemplate' })
export class LegacyShipmentPolicyTemplate {
  @PrimaryColumn({ type: 'bigint', name: 'ShipmentPolicyTemplateID' })
  shipmentPolicyTemplateID: number;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'character varying', name: 'Number', nullable: true })
  number: string | null;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'TotalDuration' })
  totalDuration: number;

  @Column({ type: 'integer', name: 'Recurrence' })
  recurrence: number;

  @Column({ type: 'numeric', name: 'DailyQuota', nullable: true })
  dailyQuota: number | null;

  @Column({ type: 'numeric', name: 'DailyQuotaPercentage', nullable: true })
  dailyQuotaPercentage: number | null;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'bigint', name: 'TransportationVehicleType1Ref', nullable: true })
  transportationVehicleType1Ref: number | null;

  @Column({ type: 'bigint', name: 'TransportationVehicleType2Ref', nullable: true })
  transportationVehicleType2Ref: number | null;

  @Column({ type: 'boolean', name: 'CanUseExtraCapacity', default: false })
  canUseExtraCapacity: boolean;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}