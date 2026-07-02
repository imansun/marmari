import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BatchCharacteristic' })
export class LegacyBatchCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'BatchCharacteristicID' })
  batchCharacteristicID: number;

  @Column({ type: 'bigint', name: 'BatchRef' })
  batchRef: number;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'character varying', name: 'CharacteristicValue', nullable: true })
  characteristicValue: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}