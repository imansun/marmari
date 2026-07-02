import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LetterAccelator' })
export class LegacyLetterAccelator {
  @PrimaryColumn({ type: 'bigint', name: 'LetterAccelatorID' })
  letterAccelatorID: number;

  @PrimaryColumn({ type: 'bigint', name: 'User' })
  user: number;

  @PrimaryColumn({ type: 'character varying', name: 'Title' })
  title: string;

  @PrimaryColumn({ type: 'integer', name: 'SequenceCode' })
  sequenceCode: number;

  @PrimaryColumn({ type: 'character varying', name: 'ActionContexts' })
  actionContexts: string;

  @PrimaryColumn({ type: 'bigint', name: 'Creator' })
  creator: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

}