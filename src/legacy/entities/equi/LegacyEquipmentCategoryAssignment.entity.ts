import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EquipmentCategoryAssignment' })
export class LegacyEquipmentCategoryAssignment {
  @PrimaryColumn({ type: 'bigint', name: 'EquipmentCategoryAssignmentID' })
  equipmentCategoryAssignmentID: number;

  @Column({ type: 'bigint', name: 'EquipmentRef' })
  equipmentRef: number;

  @Column({ type: 'bigint', name: 'EquipmentCategoryItemRef' })
  equipmentCategoryItemRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}