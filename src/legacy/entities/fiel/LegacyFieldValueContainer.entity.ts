import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FieldValueContainer' })
export class LegacyFieldValueContainer {
  @PrimaryColumn({ type: 'bigint', name: 'FieldValueContainerID' })
  fieldValueContainerID: number;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'bigint', name: 'RecordID' })
  recordID: number;

  @Column({ type: 'integer', name: 'Index' })
  index: number;

  @Column({ type: 'numeric', name: 'Number1', nullable: true })
  number1: number | null;

  @Column({ type: 'numeric', name: 'Number2', nullable: true })
  number2: number | null;

  @Column({ type: 'numeric', name: 'Number3', nullable: true })
  number3: number | null;

  @Column({ type: 'numeric', name: 'Number4', nullable: true })
  number4: number | null;

  @Column({ type: 'numeric', name: 'Number5', nullable: true })
  number5: number | null;

  @Column({ type: 'numeric', name: 'Number6', nullable: true })
  number6: number | null;

  @Column({ type: 'numeric', name: 'Number7', nullable: true })
  number7: number | null;

  @Column({ type: 'numeric', name: 'Number8', nullable: true })
  number8: number | null;

  @Column({ type: 'numeric', name: 'Number9', nullable: true })
  number9: number | null;

  @Column({ type: 'numeric', name: 'Number10', nullable: true })
  number10: number | null;

  @Column({ type: 'character varying', name: 'String1', nullable: true })
  string1: string | null;

  @Column({ type: 'character varying', name: 'String2', nullable: true })
  string2: string | null;

  @Column({ type: 'character varying', name: 'String3', nullable: true })
  string3: string | null;

  @Column({ type: 'character varying', name: 'String4', nullable: true })
  string4: string | null;

  @Column({ type: 'character varying', name: 'String5', nullable: true })
  string5: string | null;

  @Column({ type: 'character varying', name: 'String6', nullable: true })
  string6: string | null;

  @Column({ type: 'character varying', name: 'String7', nullable: true })
  string7: string | null;

  @Column({ type: 'character varying', name: 'String8', nullable: true })
  string8: string | null;

  @Column({ type: 'character varying', name: 'String9', nullable: true })
  string9: string | null;

  @Column({ type: 'character varying', name: 'String10', nullable: true })
  string10: string | null;

  @Column({ type: 'integer', name: 'Lookup1', nullable: true })
  lookup1: number | null;

  @Column({ type: 'integer', name: 'Lookup2', nullable: true })
  lookup2: number | null;

  @Column({ type: 'integer', name: 'Lookup3', nullable: true })
  lookup3: number | null;

  @Column({ type: 'integer', name: 'Lookup4', nullable: true })
  lookup4: number | null;

  @Column({ type: 'integer', name: 'Lookup5', nullable: true })
  lookup5: number | null;

  @Column({ type: 'integer', name: 'Lookup6', nullable: true })
  lookup6: number | null;

  @Column({ type: 'integer', name: 'Lookup7', nullable: true })
  lookup7: number | null;

  @Column({ type: 'integer', name: 'Lookup8', nullable: true })
  lookup8: number | null;

  @Column({ type: 'integer', name: 'Lookup9', nullable: true })
  lookup9: number | null;

  @Column({ type: 'integer', name: 'Lookup10', nullable: true })
  lookup10: number | null;

  @Column({ type: 'bigint', name: 'Reference1', nullable: true })
  reference1: number | null;

  @Column({ type: 'bigint', name: 'Reference2', nullable: true })
  reference2: number | null;

  @Column({ type: 'bigint', name: 'Reference3', nullable: true })
  reference3: number | null;

  @Column({ type: 'bigint', name: 'Reference4', nullable: true })
  reference4: number | null;

  @Column({ type: 'bigint', name: 'Reference5', nullable: true })
  reference5: number | null;

  @Column({ type: 'bigint', name: 'Reference6', nullable: true })
  reference6: number | null;

  @Column({ type: 'bigint', name: 'Reference7', nullable: true })
  reference7: number | null;

  @Column({ type: 'bigint', name: 'Reference8', nullable: true })
  reference8: number | null;

  @Column({ type: 'bigint', name: 'Reference9', nullable: true })
  reference9: number | null;

  @Column({ type: 'bigint', name: 'Reference10', nullable: true })
  reference10: number | null;

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

  @Column({ type: 'timestamp without time zone', name: 'Date6', nullable: true })
  date6: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'Date7', nullable: true })
  date7: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'Date8', nullable: true })
  date8: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'Date9', nullable: true })
  date9: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'Date10', nullable: true })
  date10: Date | null;

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

  @Column({ type: 'boolean', name: 'Boolean6', nullable: true })
  boolean6: boolean | null;

  @Column({ type: 'boolean', name: 'Boolean7', nullable: true })
  boolean7: boolean | null;

  @Column({ type: 'boolean', name: 'Boolean8', nullable: true })
  boolean8: boolean | null;

  @Column({ type: 'boolean', name: 'Boolean9', nullable: true })
  boolean9: boolean | null;

  @Column({ type: 'boolean', name: 'Boolean10', nullable: true })
  boolean10: boolean | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}