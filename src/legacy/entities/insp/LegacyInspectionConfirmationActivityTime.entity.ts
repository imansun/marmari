import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionConfirmationActivityTime' })
export class LegacyInspectionConfirmationActivityTime {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionConfirmationActivityTimeID' })
  inspectionConfirmationActivityTimeID: number;

  @Column({ type: 'bigint', name: 'InspectionConfirmationActivityRef' })
  inspectionConfirmationActivityRef: number;

  @Column({ type: 'bigint', name: 'EquipmentMeasurementPointRef', nullable: true })
  equipmentMeasurementPointRef: number | null;

  @Column({ type: 'bigint', name: 'InspectionConfirmationRef', nullable: true })
  inspectionConfirmationRef: number | null;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'StartTime', nullable: true })
  startTime: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}