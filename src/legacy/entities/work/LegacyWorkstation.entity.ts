import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Workstation' })
export class LegacyWorkstation {
  @PrimaryColumn({ type: 'bigint', name: 'WorkstationID' })
  workstationID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'bigint', name: 'CostCenterRef' })
  costCenterRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'BasisOfMeasurement' })
  basisOfMeasurement: number;

  @Column({ type: 'integer', name: 'BasisOfMeasurementOfLabour' })
  basisOfMeasurementOfLabour: number;

  @Column({ type: 'integer', name: 'BasisOfMeasurementOfOverhead' })
  basisOfMeasurementOfOverhead: number;

  @Column({ type: 'integer', name: 'DefaultAuditStartPoint', nullable: true })
  defaultAuditStartPoint: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'DLRef', nullable: true })
  dLRef: number | null;

}