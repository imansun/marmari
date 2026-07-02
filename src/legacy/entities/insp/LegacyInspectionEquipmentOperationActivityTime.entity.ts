import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionEquipmentOperationActivityTime' })
export class LegacyInspectionEquipmentOperationActivityTime {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionEquipmentOperationActivityTimeID' })
  inspectionEquipmentOperationActivityTimeID: number;

  @Column({ type: 'bigint', name: 'InspectionEquipmentOperationActivityRef' })
  inspectionEquipmentOperationActivityRef: number;

  @Column({ type: 'integer', name: 'StartTime', nullable: true })
  startTime: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}