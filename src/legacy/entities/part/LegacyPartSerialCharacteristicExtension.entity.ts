import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartSerialCharacteristicExtension' })
export class LegacyPartSerialCharacteristicExtension {
  @PrimaryColumn({ type: 'bigint', name: 'PartSerialCharacteristicExtensionID' })
  partSerialCharacteristicExtensionID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'SerialCharacteristicGroupRef' })
  serialCharacteristicGroupRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}