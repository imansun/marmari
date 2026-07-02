import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartQualityControlInspectionPlanExtension' })
export class LegacyPartQualityControlInspectionPlanExtension {
  @PrimaryColumn({ type: 'bigint', name: 'PartQualityControlInspectionPlanExtensionID' })
  partQualityControlInspectionPlanExtensionID: number;

  @Column({ type: 'bigint', name: 'PartQualityControlExtensionRef' })
  partQualityControlExtensionRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @Column({ type: 'bigint', name: 'InspectionPlanRef' })
  inspectionPlanRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}