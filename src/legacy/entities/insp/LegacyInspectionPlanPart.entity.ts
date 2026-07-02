import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionPlanPart' })
export class LegacyInspectionPlanPart {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionPlanPartID' })
  inspectionPlanPartID: number;

  @Column({ type: 'bigint', name: 'InspectionPlanRef' })
  inspectionPlanRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'boolean', name: 'IsActive' })
  isActive: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}