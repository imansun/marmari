import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionPlanOperationCharacteristicExtraTargetValue' })
export class LegacyInspectionPlanOperationCharacteristicExtraTargetValue {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionPlanOperationCharacteristicExtraTargetValueID' })
  inspectionPlanOperationCharacteristicExtraTargetValueID: number;

  @Column({ type: 'bigint', name: 'InspectionPlanOperationCharacteristicRef' })
  inspectionPlanOperationCharacteristicRef: number;

  @Column({ type: 'character varying', name: 'TargetValue' })
  targetValue: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'TargetValueInferredState', default: 1 })
  targetValueInferredState: number;

}