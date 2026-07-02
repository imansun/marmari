import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionLotOperationCharacteristicExtraTargetValue' })
export class LegacyInspectionLotOperationCharacteristicExtraTargetValue {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionLotOperationCharacteristicExtraTargetValueID' })
  inspectionLotOperationCharacteristicExtraTargetValueID: number;

  @Column({ type: 'bigint', name: 'InspectionLotOperationCharacteristicRef' })
  inspectionLotOperationCharacteristicRef: number;

  @Column({ type: 'character varying', name: 'TargetValue' })
  targetValue: string;

  @Column({ type: 'integer', name: 'TargetValueInferredState' })
  targetValueInferredState: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}