import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionPlanOperationCharacteristicDependentValue' })
export class LegacyInspectionPlanOperationCharacteristicDependentValue {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionPlanOperationCharacteristicDependentValueID' })
  inspectionPlanOperationCharacteristicDependentValueID: number;

  @Column({ type: 'bigint', name: 'InspectionPlanOperationCharacteristicRef' })
  inspectionPlanOperationCharacteristicRef: number;

  @Column({ type: 'character varying', name: 'UpperLimit', nullable: true })
  upperLimit: string | null;

  @Column({ type: 'character varying', name: 'LowerLimit', nullable: true })
  lowerLimit: string | null;

  @Column({ type: 'character varying', name: 'AlertUpperLimit', nullable: true })
  alertUpperLimit: string | null;

  @Column({ type: 'character varying', name: 'AlertLowerLimit', nullable: true })
  alertLowerLimit: string | null;

  @Column({ type: 'character varying', name: 'ActionUpperLimit', nullable: true })
  actionUpperLimit: string | null;

  @Column({ type: 'character varying', name: 'ActionLowerLimit', nullable: true })
  actionLowerLimit: string | null;

  @Column({ type: 'character varying', name: 'TargetValue', nullable: true })
  targetValue: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'InspectionCharacteristicInspectionMethodRef', nullable: true })
  inspectionCharacteristicInspectionMethodRef: number | null;

  @Column({ type: 'boolean', name: 'InspectionNeeded' })
  inspectionNeeded: boolean;

  @Column({ type: 'bigint', name: 'PartyRef', nullable: true })
  partyRef: number | null;

  @Column({ type: 'bigint', name: 'PartRef', nullable: true })
  partRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'DefaultValue', nullable: true })
  defaultValue: string | null;

}