import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'zahrafieldbak' })
export class LegacyZahrafieldbak {
  @PrimaryColumn({ type: 'bigint', name: 'FieldValueContainerID' })
  fieldValueContainerID: number;

  @PrimaryColumn({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @PrimaryColumn({ type: 'bigint', name: 'RecordID' })
  recordID: number;

  @PrimaryColumn({ type: 'integer', name: 'Index' })
  index: number;

  @PrimaryColumn({ type: 'numeric', name: 'Number1' })
  number1: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'Number2' })
  number2: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'Number3' })
  number3: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'Number4' })
  number4: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'Number5' })
  number5: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'Number6' })
  number6: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'Number7' })
  number7: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'Number8' })
  number8: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'Number9' })
  number9: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'Number10' })
  number10: number | null;

  @PrimaryColumn({ type: 'character varying', name: 'String1' })
  string1: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'String2' })
  string2: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'String3' })
  string3: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'String4' })
  string4: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'String5' })
  string5: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'String6' })
  string6: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'String7' })
  string7: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'String8' })
  string8: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'String9' })
  string9: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'String10' })
  string10: string | null;

  @PrimaryColumn({ type: 'integer', name: 'Lookup1' })
  lookup1: number | null;

  @PrimaryColumn({ type: 'integer', name: 'Lookup2' })
  lookup2: number | null;

  @PrimaryColumn({ type: 'integer', name: 'Lookup3' })
  lookup3: number | null;

  @PrimaryColumn({ type: 'integer', name: 'Lookup4' })
  lookup4: number | null;

  @PrimaryColumn({ type: 'integer', name: 'Lookup5' })
  lookup5: number | null;

  @PrimaryColumn({ type: 'integer', name: 'Lookup6' })
  lookup6: number | null;

  @PrimaryColumn({ type: 'integer', name: 'Lookup7' })
  lookup7: number | null;

  @PrimaryColumn({ type: 'integer', name: 'Lookup8' })
  lookup8: number | null;

  @PrimaryColumn({ type: 'integer', name: 'Lookup9' })
  lookup9: number | null;

  @PrimaryColumn({ type: 'integer', name: 'Lookup10' })
  lookup10: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'Reference1' })
  reference1: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'Reference2' })
  reference2: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'Reference3' })
  reference3: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'Reference4' })
  reference4: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'Reference5' })
  reference5: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'Reference6' })
  reference6: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'Reference7' })
  reference7: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'Reference8' })
  reference8: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'Reference9' })
  reference9: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'Reference10' })
  reference10: number | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'Date1' })
  date1: Date | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'Date2' })
  date2: Date | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'Date3' })
  date3: Date | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'Date4' })
  date4: Date | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'Date5' })
  date5: Date | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'Date6' })
  date6: Date | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'Date7' })
  date7: Date | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'Date8' })
  date8: Date | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'Date9' })
  date9: Date | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'Date10' })
  date10: Date | null;

  @PrimaryColumn({ type: 'boolean', name: 'Boolean1' })
  boolean1: boolean | null;

  @PrimaryColumn({ type: 'boolean', name: 'Boolean2' })
  boolean2: boolean | null;

  @PrimaryColumn({ type: 'boolean', name: 'Boolean3' })
  boolean3: boolean | null;

  @PrimaryColumn({ type: 'boolean', name: 'Boolean4' })
  boolean4: boolean | null;

  @PrimaryColumn({ type: 'boolean', name: 'Boolean5' })
  boolean5: boolean | null;

  @PrimaryColumn({ type: 'boolean', name: 'Boolean6' })
  boolean6: boolean | null;

  @PrimaryColumn({ type: 'boolean', name: 'Boolean7' })
  boolean7: boolean | null;

  @PrimaryColumn({ type: 'boolean', name: 'Boolean8' })
  boolean8: boolean | null;

  @PrimaryColumn({ type: 'boolean', name: 'Boolean9' })
  boolean9: boolean | null;

  @PrimaryColumn({ type: 'boolean', name: 'Boolean10' })
  boolean10: boolean | null;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

}