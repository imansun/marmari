import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MissionFactor' })
export class LegacyMissionFactor {
  @PrimaryColumn({ type: 'bigint', name: 'MissionFactorID' })
  missionFactorID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'AssignTypeCode' })
  assignTypeCode: number;

  @Column({ type: 'integer', name: 'MeasurementUnitCode' })
  measurementUnitCode: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'VisibleInForm' })
  visibleInForm: boolean;

  @Column({ type: 'integer', name: 'DisplayOrder', nullable: true })
  displayOrder: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}