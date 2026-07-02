import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EquipmentMeasurementPointHistory' })
export class LegacyEquipmentMeasurementPointHistory {
  @PrimaryColumn({ type: 'bigint', name: 'EquipmentMeasurementPointHistoryID' })
  equipmentMeasurementPointHistoryID: number;

  @Column({ type: 'bigint', name: 'EquipmentExtensionRef' })
  equipmentExtensionRef: number;

  @Column({ type: 'bigint', name: 'EquipmentMeasurementPointRef' })
  equipmentMeasurementPointRef: number;

  @Column({ type: 'bigint', name: 'MeasurementParameterRef', nullable: true })
  measurementParameterRef: number | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'numeric', name: 'NotificationLowerLimit', nullable: true })
  notificationLowerLimit: number | null;

  @Column({ type: 'numeric', name: 'NotificationUpperLimit', nullable: true })
  notificationUpperLimit: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}