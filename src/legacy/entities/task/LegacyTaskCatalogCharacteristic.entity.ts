import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaskCatalogCharacteristic' })
export class LegacyTaskCatalogCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'TaskCatalogCharacteristicID' })
  taskCatalogCharacteristicID: number;

  @Column({ type: 'bigint', name: 'TaskCatalogRef' })
  taskCatalogRef: number;

  @Column({ type: 'bigint', name: 'TaskTemplateCharacteristicRef' })
  taskTemplateCharacteristicRef: number;

  @Column({ type: 'character varying', name: 'CharacteristicValue', nullable: true })
  characteristicValue: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}