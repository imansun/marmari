import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LetterUrgency' })
export class LegacyLetterUrgency {
  @PrimaryColumn({ type: 'bigint', name: 'LetterUrgencyID' })
  letterUrgencyID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}