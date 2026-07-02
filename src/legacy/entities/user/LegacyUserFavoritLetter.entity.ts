import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'UserFavoritLetter' })
export class LegacyUserFavoritLetter {
  @PrimaryColumn({ type: 'bigint', name: 'UserFavoritLetterID' })
  userFavoritLetterID: number;

  @Column({ type: 'bigint', name: 'LetterRef' })
  letterRef: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}