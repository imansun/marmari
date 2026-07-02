import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EngineeringPartExtension' })
export class LegacyEngineeringPartExtension {
  @PrimaryColumn({ type: 'bigint', name: 'EngineeringPartExtensionID' })
  engineeringPartExtensionID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'boolean', name: 'IsPhantom' })
  isPhantom: boolean;

  @Column({ type: 'numeric', name: 'ProductionToleranceInPercent', nullable: true })
  productionToleranceInPercent: number | null;

  @Column({ type: 'character varying', name: 'ManufacturingPartCode', nullable: true })
  manufacturingPartCode: string | null;

  @Column({ type: 'character varying', name: 'ManufacturingPartTitle', nullable: true })
  manufacturingPartTitle: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'ReworkToleranceInPercent', nullable: true })
  reworkToleranceInPercent: number | null;

  @Column({ type: 'boolean', name: 'IsRecyclable', default: false })
  isRecyclable: boolean;

}