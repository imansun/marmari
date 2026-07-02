import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartQualityControlExtension' })
export class LegacyPartQualityControlExtension {
  @PrimaryColumn({ type: 'bigint', name: 'PartQualityControlExtensionID' })
  partQualityControlExtensionID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'boolean', name: 'NeedsRetest', default: false })
  needsRetest: boolean;

  @Column({ type: 'integer', name: 'TotalShelfLife', nullable: true })
  totalShelfLife: number | null;

  @Column({ type: 'integer', name: 'InspectionInterval', nullable: true })
  inspectionInterval: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'NeedsStabilityTesting', default: false })
  needsStabilityTesting: boolean;

}