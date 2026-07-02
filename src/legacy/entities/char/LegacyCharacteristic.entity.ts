import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Characteristic' })
export class LegacyCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'CharacteristicID' })
  characteristicID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'boolean', name: 'IsList' })
  isList: boolean;

  @Column({ type: 'character varying', name: 'MetadataType', nullable: true })
  metadataType: string | null;

  @Column({ type: 'bigint', name: 'DataType' })
  dataType: number;

  @Column({ type: 'text', name: 'Validation' })
  validation: string;

  @Column({ type: 'character varying', name: 'Type' })
  type: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}