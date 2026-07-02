import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkOrderEquipment' })
export class LegacyWorkOrderEquipment {
  @PrimaryColumn({ type: 'bigint', name: 'WorkOrderEquipmentID' })
  workOrderEquipmentID: number;

  @Column({ type: 'bigint', name: 'WorkOrderRef' })
  workOrderRef: number;

  @Column({ type: 'bigint', name: 'EquipmentRef' })
  equipmentRef: number;

  @Column({ type: 'bigint', name: 'BomItemRef', nullable: true })
  bomItemRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'WorkCenterRef', nullable: true })
  workCenterRef: number | null;

  @Column({ type: 'bigint', name: 'CostCenterRef' })
  costCenterRef: number;

  @Column({ type: 'bigint', name: 'ProjectRef', nullable: true })
  projectRef: number | null;

}