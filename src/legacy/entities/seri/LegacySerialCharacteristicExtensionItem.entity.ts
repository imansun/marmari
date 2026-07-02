import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SerialCharacteristicExtensionItem' })
export class LegacySerialCharacteristicExtensionItem {
  @PrimaryColumn({ type: 'bigint', name: 'SerialCharacteristicExtensionItemID' })
  serialCharacteristicExtensionItemID: number;

  @Column({ type: 'bigint', name: 'SerialCharacteristicExtensionRef' })
  serialCharacteristicExtensionRef: number;

  @Column({ type: 'bigint', name: 'CharacteristicItemRef' })
  characteristicItemRef: number;

  @Column({ type: 'character varying', name: 'Barcode' })
  barcode: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}