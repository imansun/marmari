import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductVersion' })
export class LegacyProductVersion {
  @PrimaryColumn({ type: 'character varying', name: 'ComponentName' })
  componentName: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'AssemblyName' })
  assemblyName: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'ProductVersion' })
  productVersion: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'Build' })
  build: string | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'UpgradeDate' })
  upgradeDate: Date;

}