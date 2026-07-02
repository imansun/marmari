import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionCharacteristicInspectionMethod' })
export class LegacyInspectionCharacteristicInspectionMethod {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionCharacteristicInspectionMethodID' })
  inspectionCharacteristicInspectionMethodID: number;

  @Column({ type: 'bigint', name: 'InspectionCharacteristicRef' })
  inspectionCharacteristicRef: number;

  @Column({ type: 'bigint', name: 'InspectionMethodRef' })
  inspectionMethodRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}