import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FactorViewSettingType' })
export class LegacyFactorViewSettingType {
  @PrimaryColumn({ type: 'bigint', name: 'FactorViewSettingTypeID' })
  factorViewSettingTypeID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'LevelType' })
  levelType: number;

  @Column({ type: 'boolean', name: 'HasCompensationFactor' })
  hasCompensationFactor: boolean;

  @Column({ type: 'boolean', name: 'HasAttendanceFactor' })
  hasAttendanceFactor: boolean;

  @Column({ type: 'boolean', name: 'HasAllTypeOfCompFactor', default: false })
  hasAllTypeOfCompFactor: boolean;

  @Column({ type: 'integer', name: 'CalcGroups' })
  calcGroups: number;

  @Column({ type: 'integer', name: 'AssignTypes' })
  assignTypes: number;

  @Column({ type: 'integer', name: 'Categories' })
  categories: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'CalcType', default: 3 })
  calcType: number;

}