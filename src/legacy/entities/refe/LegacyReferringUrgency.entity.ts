import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReferringUrgency' })
export class LegacyReferringUrgency {
  @PrimaryColumn({ type: 'bigint', name: 'ReferringUrgencyID' })
  referringUrgencyID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'LetterUrgencyRef' })
  letterUrgencyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}