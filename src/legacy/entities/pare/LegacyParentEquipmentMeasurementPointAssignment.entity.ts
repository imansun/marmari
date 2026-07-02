import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ParentEquipmentMeasurementPointAssignment' })
export class LegacyParentEquipmentMeasurementPointAssignment {
  @PrimaryColumn({ type: 'bigint', name: 'ParentEquipmentMeasurementPointAssignmentID' })
  parentEquipmentMeasurementPointAssignmentID: number;

  @Column({ type: 'bigint', name: 'EquipmentMeasurementPointRef' })
  equipmentMeasurementPointRef: number;

  @Column({ type: 'bigint', name: 'ParentEquipmentRef' })
  parentEquipmentRef: number;

  @Column({ type: 'bigint', name: 'ParentEquipmentMeasurementPointRef' })
  parentEquipmentMeasurementPointRef: number;

  @Column({ type: 'timestamp without time zone', name: 'StartAutomaticDate' })
  startAutomaticDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndAutomaticDate', nullable: true })
  endAutomaticDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}