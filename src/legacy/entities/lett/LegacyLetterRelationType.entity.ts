import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LetterRelationType' })
export class LegacyLetterRelationType {
  @PrimaryColumn({ type: 'bigint', name: 'LetterRelationTypeID' })
  letterRelationTypeID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}