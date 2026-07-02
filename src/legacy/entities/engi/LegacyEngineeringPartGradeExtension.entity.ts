import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EngineeringPartGradeExtension' })
export class LegacyEngineeringPartGradeExtension {
  @PrimaryColumn({ type: 'bigint', name: 'EngineeringPartGradeExtensionID' })
  engineeringPartGradeExtensionID: number;

  @Column({ type: 'bigint', name: 'EngineeringPartExtensionRef' })
  engineeringPartExtensionRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'PossibilityOfProduction', default: 1 })
  possibilityOfProduction: number;

}