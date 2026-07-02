import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Phrase' })
export class LegacyPhrase {
  @PrimaryColumn({ type: 'bigint', name: 'PhraseID' })
  phraseID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'CompetencyRef', nullable: true })
  competencyRef: number | null;

  @Column({ type: 'bigint', name: 'PhraseGroupItemRef', nullable: true })
  phraseGroupItemRef: number | null;

  @Column({ type: 'integer', name: 'PhraseType' })
  phraseType: number;

  @Column({ type: 'integer', name: 'InputType', nullable: true })
  inputType: number | null;

  @Column({ type: 'integer', name: 'ReturnType', nullable: true })
  returnType: number | null;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'integer', name: 'CreationType' })
  creationType: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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

  @Column({ type: 'integer', name: 'Type', default: 1 })
  type: number;

}