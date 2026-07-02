import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReferringSecurityLevel' })
export class LegacyReferringSecurityLevel {
  @PrimaryColumn({ type: 'bigint', name: 'ReferringSecurityLevelID' })
  referringSecurityLevelID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'LetterSecurityLevelRef' })
  letterSecurityLevelRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}