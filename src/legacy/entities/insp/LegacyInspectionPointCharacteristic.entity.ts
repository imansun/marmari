import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionPointCharacteristic' })
export class LegacyInspectionPointCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionPointCharacteristicID' })
  inspectionPointCharacteristicID: number;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'InspectionPointRef' })
  inspectionPointRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}