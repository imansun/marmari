import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EquipmentProfileCharacteristic' })
export class LegacyEquipmentProfileCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'EquipmentProfileCharacteristicID' })
  equipmentProfileCharacteristicID: number;

  @Column({ type: 'bigint', name: 'EquipmentProfileRef' })
  equipmentProfileRef: number;

  @Column({ type: 'bigint', name: 'EquipmentProfileTemplateCharacteristicRef' })
  equipmentProfileTemplateCharacteristicRef: number;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}