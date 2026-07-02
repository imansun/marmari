import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkCenterCapacityEquipment' })
export class LegacyWorkCenterCapacityEquipment {
  @PrimaryColumn({ type: 'bigint', name: 'WorkCenterCapacityEquipmentID' })
  workCenterCapacityEquipmentID: number;

  @Column({ type: 'bigint', name: 'WorkCenterCapacityRef' })
  workCenterCapacityRef: number;

  @Column({ type: 'bigint', name: 'EquipmentRef' })
  equipmentRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}