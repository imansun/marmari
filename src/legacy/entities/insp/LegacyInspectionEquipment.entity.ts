import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionEquipment' })
export class LegacyInspectionEquipment {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionEquipmentID' })
  inspectionEquipmentID: number;

  @Column({ type: 'bigint', name: 'InspectionRef' })
  inspectionRef: number;

  @Column({ type: 'bigint', name: 'EquipmentRef' })
  equipmentRef: number;

  @Column({ type: 'bigint', name: 'BomAssemblyRef', nullable: true })
  bomAssemblyRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'WorkCenterRef', nullable: true })
  workCenterRef: number | null;

  @Column({ type: 'bigint', name: 'CostCenterRef' })
  costCenterRef: number;

  @Column({ type: 'bigint', name: 'ProjectRef', nullable: true })
  projectRef: number | null;

}