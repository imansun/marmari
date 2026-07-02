import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TestProfile' })
export class LegacyTestProfile {
  @PrimaryColumn({ type: 'bigint', name: 'TestProfileID' })
  testProfileID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'InspectionPlanRef', nullable: true })
  inspectionPlanRef: number | null;

  @Column({ type: 'bigint', name: 'BatchRef' })
  batchRef: number;

  @Column({ type: 'bigint', name: 'InspectionScheduleRef', nullable: true })
  inspectionScheduleRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'StartDate', nullable: true })
  startDate: Date | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'StorageCondition', nullable: true })
  storageCondition: number | null;

  @Column({ type: 'integer', name: 'PrimaryPackaging', nullable: true })
  primaryPackaging: number | null;

  @Column({ type: 'integer', name: 'PhysicalSampleContainer', nullable: true })
  physicalSampleContainer: number | null;

  @Column({ type: 'integer', name: 'PhysicalSampleStorageLocation', nullable: true })
  physicalSampleStorageLocation: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

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

}