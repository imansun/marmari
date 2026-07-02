import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MaterialClassChangeLog' })
export class LegacyMaterialClassChangeLog {
  @PrimaryColumn({ type: 'bigint', name: 'MaterialClassChangeLogID' })
  materialClassChangeLogID: number;

  @Column({ type: 'bigint', name: 'MaterialClassRef' })
  materialClassRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'PropertyName' })
  propertyName: string;

  @Column({ type: 'character varying', name: 'PreviousValue' })
  previousValue: string;

  @Column({ type: 'character varying', name: 'CurrentValue' })
  currentValue: string;

  @Column({ type: 'bigint', name: 'ModifierRef' })
  modifierRef: number;

  @Column({ type: 'character varying', name: 'MaterialClassCode' })
  materialClassCode: string;

  @Column({ type: 'integer', name: 'PropertyType' })
  propertyType: number;

  @Column({ type: 'integer', name: 'ChangeLogType' })
  changeLogType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'MaterialClassID', nullable: true })
  materialClassID: number | null;

  @Column({ type: 'integer', name: 'ClassType', nullable: true })
  classType: number | null;

  @Column({ type: 'character varying', name: 'MaterialClassName', nullable: true })
  materialClassName: string | null;

}