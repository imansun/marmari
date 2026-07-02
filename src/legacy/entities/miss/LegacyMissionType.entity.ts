import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MissionType' })
export class LegacyMissionType {
  @PrimaryColumn({ type: 'bigint', name: 'MissionTypeID' })
  missionTypeID: number;

  @Column({ type: 'character varying', name: 'Code', nullable: true })
  code: string | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'DefaultInDocument' })
  defaultInDocument: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'TypeCode', default: 1 })
  typeCode: number;

  @Column({ type: 'boolean', name: 'FillFromShift', default: false })
  fillFromShift: boolean;

}