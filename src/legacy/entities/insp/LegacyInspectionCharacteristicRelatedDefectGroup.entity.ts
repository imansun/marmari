import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionCharacteristicRelatedDefectGroup' })
export class LegacyInspectionCharacteristicRelatedDefectGroup {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionCharacteristicRelatedDefectGroupID' })
  inspectionCharacteristicRelatedDefectGroupID: number;

  @Column({ type: 'bigint', name: 'InspectionCharacteristicRef' })
  inspectionCharacteristicRef: number;

  @Column({ type: 'bigint', name: 'EntityGroupRef' })
  entityGroupRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}