import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionPointCharacteristicValue' })
export class LegacyInspectionPointCharacteristicValue {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionPointCharacteristicValueID' })
  inspectionPointCharacteristicValueID: number;

  @Column({ type: 'bigint', name: 'InspectionPointValueRef' })
  inspectionPointValueRef: number;

  @Column({ type: 'bigint', name: 'InspectionPointCharacteristicRef' })
  inspectionPointCharacteristicRef: number;

  @Column({ type: 'character varying', name: 'Value' })
  value: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}