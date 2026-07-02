import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaskCharacteristic' })
export class LegacyTaskCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'TaskCharacteristicID' })
  taskCharacteristicID: number;

  @Column({ type: 'bigint', name: 'TaskRef' })
  taskRef: number;

  @Column({ type: 'bigint', name: 'TaskTemplateCharacteristicRef' })
  taskTemplateCharacteristicRef: number;

  @Column({ type: 'character varying', name: 'CharacteristicValue', nullable: true })
  characteristicValue: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}