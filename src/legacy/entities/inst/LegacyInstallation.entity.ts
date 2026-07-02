import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Installation' })
export class LegacyInstallation {
  @PrimaryColumn({ type: 'bigint', name: 'ID' })
  iD: number;

  @Column({ type: 'uuid', name: 'PackageID' })
  packageID: string;

  @Column({ type: 'character varying', name: 'PackageTitle' })
  packageTitle: string;

  @Column({ type: 'character varying', name: 'SelectedModules' })
  selectedModules: string;

  @Column({ type: 'character varying', name: 'MasterServerName', nullable: true })
  masterServerName: string | null;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'FinishDate', nullable: true })
  finishDate: Date | null;

  @Column({ type: 'numeric', name: 'ProductVersion' })
  productVersion: number;

  @Column({ type: 'integer', name: 'ReleaseNumber' })
  releaseNumber: number;

  @Column({ type: 'integer', name: 'SourceReleaseNumber', nullable: true })
  sourceReleaseNumber: number | null;

  @Column({ type: 'boolean', name: 'Succeeded' })
  succeeded: boolean;

  @Column({ type: 'character varying', name: 'RuntimeParametersValues', nullable: true })
  runtimeParametersValues: string | null;

}