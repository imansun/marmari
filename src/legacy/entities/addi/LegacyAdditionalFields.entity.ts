import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AdditionalFields' })
export class LegacyAdditionalFields {
  @PrimaryColumn({ type: 'bigint', name: 'AdditionalFieldsID' })
  additionalFieldsID: number;

  @Column({ type: 'integer', name: 'DocumentType' })
  documentType: number;

  @Column({ type: 'bigint', name: 'DocumentRef' })
  documentRef: number;

  @Column({ type: 'character varying', name: 'Text1', nullable: true })
  text1: string | null;

  @Column({ type: 'character varying', name: 'Text2', nullable: true })
  text2: string | null;

  @Column({ type: 'character varying', name: 'Text3', nullable: true })
  text3: string | null;

  @Column({ type: 'character varying', name: 'Text4', nullable: true })
  text4: string | null;

  @Column({ type: 'character varying', name: 'Text5', nullable: true })
  text5: string | null;

  @Column({ type: 'timestamp without time zone', name: 'Date1', nullable: true })
  date1: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'Date2', nullable: true })
  date2: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'Date3', nullable: true })
  date3: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'Date4', nullable: true })
  date4: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'Date5', nullable: true })
  date5: Date | null;

  @Column({ type: 'boolean', name: 'Boolean1', nullable: true })
  boolean1: boolean | null;

  @Column({ type: 'boolean', name: 'Boolean2', nullable: true })
  boolean2: boolean | null;

  @Column({ type: 'boolean', name: 'Boolean3', nullable: true })
  boolean3: boolean | null;

  @Column({ type: 'boolean', name: 'Boolean4', nullable: true })
  boolean4: boolean | null;

  @Column({ type: 'boolean', name: 'Boolean5', nullable: true })
  boolean5: boolean | null;

  @Column({ type: 'bigint', name: 'EntityRef1', nullable: true })
  entityRef1: number | null;

  @Column({ type: 'bigint', name: 'EntityRef2', nullable: true })
  entityRef2: number | null;

  @Column({ type: 'bigint', name: 'EntityRef3', nullable: true })
  entityRef3: number | null;

  @Column({ type: 'bigint', name: 'EntityRef4', nullable: true })
  entityRef4: number | null;

  @Column({ type: 'bigint', name: 'EntityRef5', nullable: true })
  entityRef5: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'EntityCode1', nullable: true })
  entityCode1: number | null;

  @Column({ type: 'integer', name: 'EntityCode2', nullable: true })
  entityCode2: number | null;

  @Column({ type: 'integer', name: 'EntityCode3', nullable: true })
  entityCode3: number | null;

  @Column({ type: 'integer', name: 'EntityCode4', nullable: true })
  entityCode4: number | null;

  @Column({ type: 'integer', name: 'EntityCode5', nullable: true })
  entityCode5: number | null;

}