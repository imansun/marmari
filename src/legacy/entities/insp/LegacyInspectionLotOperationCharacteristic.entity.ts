import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionLotOperationCharacteristic' })
export class LegacyInspectionLotOperationCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionLotOperationCharacteristicID' })
  inspectionLotOperationCharacteristicID: number;

  @Column({ type: 'bigint', name: 'InspectionCharacteristicRef' })
  inspectionCharacteristicRef: number;

  @Column({ type: 'bigint', name: 'InspectionCharacteristicInspectionMethodRef', nullable: true })
  inspectionCharacteristicInspectionMethodRef: number | null;

  @Column({ type: 'bigint', name: 'InspectionPointValueRef' })
  inspectionPointValueRef: number;

  @Column({ type: 'integer', name: 'Number' })
  number: number;

  @Column({ type: 'character varying', name: 'UpperLimit', nullable: true })
  upperLimit: string | null;

  @Column({ type: 'character varying', name: 'LowerLimit', nullable: true })
  lowerLimit: string | null;

  @Column({ type: 'character varying', name: 'TargetValue', nullable: true })
  targetValue: string | null;

  @Column({ type: 'numeric', name: 'Tolerance' })
  tolerance: number;

  @Column({ type: 'integer', name: 'ImportanceLevel', nullable: true })
  importanceLevel: number | null;

  @Column({ type: 'integer', name: 'Category', nullable: true })
  category: number | null;

  @Column({ type: 'character varying', name: 'DescriptionFromPlan', nullable: true })
  descriptionFromPlan: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'AlertUpperLimit', nullable: true })
  alertUpperLimit: string | null;

  @Column({ type: 'character varying', name: 'AlertLowerLimit', nullable: true })
  alertLowerLimit: string | null;

  @Column({ type: 'character varying', name: 'ActionUpperLimit', nullable: true })
  actionUpperLimit: string | null;

  @Column({ type: 'character varying', name: 'ActionLowerLimit', nullable: true })
  actionLowerLimit: string | null;

  @Column({ type: 'integer', name: 'TargetValueInferredState', default: 1 })
  targetValueInferredState: number;

  @Column({ type: 'character varying', name: 'DefaultValue', nullable: true })
  defaultValue: string | null;

}