import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RpaGLComparisonReportDeployment' })
export class LegacyRpaGLComparisonReportDeployment {
  @PrimaryColumn({ type: 'bigint', name: 'RpaGLComparisonReportDeploymentID' })
  rpaGLComparisonReportDeploymentID: number;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'bigint', name: 'EntityID' })
  entityID: number;

  @Column({ type: 'bigint', name: 'SLRef', nullable: true })
  sLRef: number | null;

  @Column({ type: 'character varying', name: 'SLCode', nullable: true })
  sLCode: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}