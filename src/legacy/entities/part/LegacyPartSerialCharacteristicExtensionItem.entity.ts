import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartSerialCharacteristicExtensionItem' })
export class LegacyPartSerialCharacteristicExtensionItem {
  @PrimaryColumn({ type: 'bigint', name: 'PartSerialCharacteristicExtensionItemID' })
  partSerialCharacteristicExtensionItemID: number;

  @Column({ type: 'bigint', name: 'PartSerialCharacteristicExtensionRef' })
  partSerialCharacteristicExtensionRef: number;

  @Column({ type: 'bigint', name: 'SerialCharacteristicGroupItemRef' })
  serialCharacteristicGroupItemRef: number;

  @Column({ type: 'character varying', name: 'CharacteristicValue' })
  characteristicValue: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}