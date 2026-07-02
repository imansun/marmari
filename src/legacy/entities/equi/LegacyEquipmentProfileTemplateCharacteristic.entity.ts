import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EquipmentProfileTemplateCharacteristic' })
export class LegacyEquipmentProfileTemplateCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'EquipmentProfileTemplateCharacteristicID' })
  equipmentProfileTemplateCharacteristicID: number;

  @Column({ type: 'bigint', name: 'EquipmentProfileTemplateRef' })
  equipmentProfileTemplateRef: number;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}