import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessBookmarkInstance' })
export class LegacyProcessBookmarkInstance {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessBookmarkInstanceID' })
  processBookmarkInstanceID: number;

  @Column({ type: 'bigint', name: 'ProcessInstanceRef', nullable: true })
  processInstanceRef: number | null;

  @Column({ type: 'bigint', name: 'ProcessBookmarkDefinitionRef' })
  processBookmarkDefinitionRef: number;

  @Column({ type: 'text', name: 'Value1', nullable: true })
  value1: string | null;

  @Column({ type: 'text', name: 'Value2', nullable: true })
  value2: string | null;

  @Column({ type: 'text', name: 'Value3', nullable: true })
  value3: string | null;

  @Column({ type: 'text', name: 'Value4', nullable: true })
  value4: string | null;

  @Column({ type: 'text', name: 'Value5', nullable: true })
  value5: string | null;

  @Column({ type: 'text', name: 'Value6', nullable: true })
  value6: string | null;

  @Column({ type: 'text', name: 'Value7', nullable: true })
  value7: string | null;

  @Column({ type: 'text', name: 'Value8', nullable: true })
  value8: string | null;

  @Column({ type: 'text', name: 'Value9', nullable: true })
  value9: string | null;

  @Column({ type: 'text', name: 'Value10', nullable: true })
  value10: string | null;

  @Column({ type: 'text', name: 'Value11', nullable: true })
  value11: string | null;

  @Column({ type: 'text', name: 'Value12', nullable: true })
  value12: string | null;

  @Column({ type: 'text', name: 'Value13', nullable: true })
  value13: string | null;

  @Column({ type: 'text', name: 'Value14', nullable: true })
  value14: string | null;

  @Column({ type: 'text', name: 'Value15', nullable: true })
  value15: string | null;

  @Column({ type: 'text', name: 'Value16', nullable: true })
  value16: string | null;

  @Column({ type: 'text', name: 'Value17', nullable: true })
  value17: string | null;

  @Column({ type: 'text', name: 'Value18', nullable: true })
  value18: string | null;

  @Column({ type: 'text', name: 'Value19', nullable: true })
  value19: string | null;

  @Column({ type: 'text', name: 'Value20', nullable: true })
  value20: string | null;

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

  @Column({ type: 'character varying', name: 'String11', nullable: true })
  string11: string | null;

  @Column({ type: 'character varying', name: 'String12', nullable: true })
  string12: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}