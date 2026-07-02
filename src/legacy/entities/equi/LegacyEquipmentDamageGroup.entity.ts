import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EquipmentDamageGroup' })
export class LegacyEquipmentDamageGroup {
  @PrimaryColumn({ type: 'bigint', name: 'EquipmentDamageGroupID' })
  equipmentDamageGroupID: number;

  @Column({ type: 'bigint', name: 'EquipmentExtensionRef' })
  equipmentExtensionRef: number;

  @Column({ type: 'bigint', name: 'DamageGroupRef' })
  damageGroupRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}