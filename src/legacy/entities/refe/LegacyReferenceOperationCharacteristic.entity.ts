import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReferenceOperationCharacteristic' })
export class LegacyReferenceOperationCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'ReferenceOperationCharacteristicID' })
  referenceOperationCharacteristicID: number;

  @Column({ type: 'bigint', name: 'ReferenceOperationRef' })
  referenceOperationRef: number;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}