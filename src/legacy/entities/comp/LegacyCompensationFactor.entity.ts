import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CompensationFactor' })
export class LegacyCompensationFactor {
  @PrimaryColumn({ type: 'bigint', name: 'CompensationFactorID' })
  compensationFactorID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'CompensationCalcTypeRef' })
  compensationCalcTypeRef: number;

  @Column({ type: 'integer', name: 'CategoryCode' })
  categoryCode: number;

  @Column({ type: 'integer', name: 'AssignTypeCode' })
  assignTypeCode: number;

  @Column({ type: 'integer', name: 'MeasurementUnitCode' })
  measurementUnitCode: number;

  @Column({ type: 'boolean', name: 'FinalResult' })
  finalResult: boolean;

  @Column({ type: 'boolean', name: 'IsTreasury' })
  isTreasury: boolean;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

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