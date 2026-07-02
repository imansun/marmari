import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EngineeringCharacteristicExtension' })
export class LegacyEngineeringCharacteristicExtension {
  @PrimaryColumn({ type: 'bigint', name: 'EngineeringCharacteristicExtensionID' })
  engineeringCharacteristicExtensionID: number;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'boolean', name: 'EffectiveOnQuantity' })
  effectiveOnQuantity: boolean;

  @Column({ type: 'numeric', name: 'BaseQuantity' })
  baseQuantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}