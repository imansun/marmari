import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReferringLetter' })
export class LegacyReferringLetter {
  @PrimaryColumn({ type: 'bigint', name: 'ReferringLetterID' })
  referringLetterID: number;

  @Column({ type: 'bigint', name: 'ReferringRef' })
  referringRef: number;

  @Column({ type: 'bigint', name: 'LetterRef' })
  letterRef: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}