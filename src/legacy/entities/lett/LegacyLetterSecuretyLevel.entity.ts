import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LetterSecuretyLevel' })
export class LegacyLetterSecuretyLevel {
  @PrimaryColumn({ type: 'bigint', name: 'LetterSecuretyLevelID' })
  letterSecuretyLevelID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}