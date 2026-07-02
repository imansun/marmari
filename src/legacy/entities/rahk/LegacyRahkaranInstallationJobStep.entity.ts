import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RahkaranInstallationJobStep' })
export class LegacyRahkaranInstallationJobStep {
  @PrimaryColumn({ type: 'bigint', name: 'RahkaranInstallationJobStepID' })
  rahkaranInstallationJobStepID: number;

  @Column({ type: 'character varying', name: 'StepName' })
  stepName: string;

  @Column({ type: 'character varying', name: 'StepName_fa' })
  stepNameFa: string;

  @Column({ type: 'character varying', name: 'TargetMachineName', nullable: true })
  targetMachineName: string | null;

  @Column({ type: 'character varying', name: 'TargetComponentName', nullable: true })
  targetComponentName: string | null;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'character varying', name: 'StatusText' })
  statusText: string;

  @Column({ type: 'numeric', name: 'ProductVersion', nullable: true })
  productVersion: number | null;

  @Column({ type: 'integer', name: 'ReleaseNumber', nullable: true })
  releaseNumber: number | null;

  @Column({ type: 'integer', name: 'HotFixNumber', nullable: true })
  hotFixNumber: number | null;

  @Column({ type: 'timestamp without time zone', name: 'StartTime', nullable: true })
  startTime: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndTime', nullable: true })
  endTime: Date | null;

  @Column({ type: 'character varying', name: 'SetupToolMachineName' })
  setupToolMachineName: string;

  @Column({ type: 'character varying', name: 'SetupToolPath' })
  setupToolPath: string;

  @Column({ type: 'character varying', name: 'VersionName', nullable: true })
  versionName: string | null;

}