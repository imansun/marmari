import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FarayarPackage' })
export class LegacyFarayarPackage {
  @PrimaryColumn({ type: 'bigint', name: 'FarayarPackageID' })
  farayarPackageID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Developer', nullable: true })
  developer: string | null;

  @Column({ type: 'character varying', name: 'Prefix', nullable: true })
  prefix: string | null;

  @Column({ type: 'character varying', name: 'Content', nullable: true })
  content: string | null;

  @Column({ type: 'boolean', name: 'EnableDebugging' })
  enableDebugging: boolean;

  @Column({ type: 'character varying', name: 'PackageVersion', nullable: true })
  packageVersion: string | null;

  @Column({ type: 'integer', name: 'Revision' })
  revision: number;

  @Column({ type: 'boolean', name: 'Enabled' })
  enabled: boolean;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}