import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerSurveyData' })
export class LegacyCustomerSurveyData {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerSurveyDataID' })
  customerSurveyDataID: number;

  @Column({ type: 'bigint', name: 'TourItemSurveyRef' })
  tourItemSurveyRef: number;

  @Column({ type: 'bigint', name: 'CustomerSurveyStructureFieldSpecRef' })
  customerSurveyStructureFieldSpecRef: number;

  @Column({ type: 'integer', name: 'EntityCode', nullable: true })
  entityCode: number | null;

  @Column({ type: 'bigint', name: 'EntityRef', nullable: true })
  entityRef: number | null;

  @Column({ type: 'character varying', name: 'Text1', nullable: true })
  text1: string | null;

  @Column({ type: 'double precision', name: 'Numeric1', nullable: true })
  numeric1: string | null;

  @Column({ type: 'bigint', name: 'UnitRef1', nullable: true })
  unitRef1: number | null;

  @Column({ type: 'bytea', name: 'Pic1', nullable: true })
  pic1: Buffer | null;

  @Column({ type: 'timestamp without time zone', name: 'DateTime1', nullable: true })
  dateTime1: Date | null;

  @Column({ type: 'integer', name: 'Lookup1', nullable: true })
  lookup1: number | null;

  @Column({ type: 'boolean', name: 'Boolean1', nullable: true })
  boolean1: boolean | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}