import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EquipmentMeasurementPoint' })
export class LegacyEquipmentMeasurementPoint {
  @PrimaryColumn({ type: 'bigint', name: 'EquipmentMeasurementPointID' })
  equipmentMeasurementPointID: number;

  @Column({ type: 'bigint', name: 'EquipmentExtensionRef' })
  equipmentExtensionRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'MeterType', nullable: true })
  meterType: number | null;

  @Column({ type: 'bigint', name: 'MeasurementParameterRef' })
  measurementParameterRef: number;

  @Column({ type: 'numeric', name: 'NotificationLowerLimit', nullable: true })
  notificationLowerLimit: number | null;

  @Column({ type: 'numeric', name: 'NotificationUpperLimit', nullable: true })
  notificationUpperLimit: number | null;

  @Column({ type: 'numeric', name: 'AnnualWork', nullable: true })
  annualWork: number | null;

  @Column({ type: 'numeric', name: 'EstimatedAnnualWork', nullable: true })
  estimatedAnnualWork: number | null;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}