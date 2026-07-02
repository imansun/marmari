import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EquipmentDamageReasonGroup' })
export class LegacyEquipmentDamageReasonGroup {
  @PrimaryColumn({ type: 'bigint', name: 'EquipmentDamageReasonGroupID' })
  equipmentDamageReasonGroupID: number;

  @Column({ type: 'bigint', name: 'EquipmentExtensionRef' })
  equipmentExtensionRef: number;

  @Column({ type: 'bigint', name: 'DamageReasonGroupRef' })
  damageReasonGroupRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}