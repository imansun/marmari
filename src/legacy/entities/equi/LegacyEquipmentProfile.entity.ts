import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EquipmentProfile' })
export class LegacyEquipmentProfile {
  @PrimaryColumn({ type: 'bigint', name: 'EquipmentProfileID' })
  equipmentProfileID: number;

  @Column({ type: 'bigint', name: 'EquipmentProfileTemplateRef' })
  equipmentProfileTemplateRef: number;

  @Column({ type: 'bigint', name: 'EquipmentRef' })
  equipmentRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}