import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SerialCharacteristicExtension' })
export class LegacySerialCharacteristicExtension {
  @PrimaryColumn({ type: 'bigint', name: 'SerialCharacteristicExtensionID' })
  serialCharacteristicExtensionID: number;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}