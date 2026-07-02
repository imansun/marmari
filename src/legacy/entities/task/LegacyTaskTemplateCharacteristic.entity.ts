import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaskTemplateCharacteristic' })
export class LegacyTaskTemplateCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'TaskTemplateCharacteristicID' })
  taskTemplateCharacteristicID: number;

  @Column({ type: 'bigint', name: 'TaskTemplateRef' })
  taskTemplateRef: number;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'boolean', name: 'IsRequired' })
  isRequired: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}