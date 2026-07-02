import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionPointCharacteristicDefaultValue' })
export class LegacyInspectionPointCharacteristicDefaultValue {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionPointCharacteristicDefaultValueID' })
  inspectionPointCharacteristicDefaultValueID: number;

  @Column({ type: 'character varying', name: 'Value' })
  value: string;

  @Column({ type: 'bigint', name: 'InspectionPointCharacteristicRef' })
  inspectionPointCharacteristicRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}