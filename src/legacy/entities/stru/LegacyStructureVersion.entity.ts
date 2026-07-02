import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StructureVersion' })
export class LegacyStructureVersion {
  @PrimaryColumn({ type: 'bigint', name: 'StructureVersionID' })
  structureVersionID: number;

  @Column({ type: 'timestamp without time zone', name: 'StartDate', nullable: true })
  startDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

  @Column({ type: 'bigint', name: 'StructureRef' })
  structureRef: number;

  @Column({ type: 'bigint', name: 'VersionNumber', nullable: true })
  versionNumber: number | null;

  @Column({ type: 'boolean', name: 'IsPublished', nullable: true })
  isPublished: boolean | null;

  @Column({ type: 'character varying', name: 'VersionDescription', nullable: true })
  versionDescription: string | null;

}