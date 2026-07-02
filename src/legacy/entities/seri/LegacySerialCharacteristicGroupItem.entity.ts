import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SerialCharacteristicGroupItem' })
export class LegacySerialCharacteristicGroupItem {
  @PrimaryColumn({ type: 'bigint', name: 'SerialCharacteristicGroupItemID' })
  serialCharacteristicGroupItemID: number;

  @Column({ type: 'bigint', name: 'SerialCharacteristicGroupRef' })
  serialCharacteristicGroupRef: number;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}