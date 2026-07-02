import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LetterBaseRelation' })
export class LegacyLetterBaseRelation {
  @PrimaryColumn({ type: 'bigint', name: 'LetterBaseRelationID' })
  letterBaseRelationID: number;

  @Column({ type: 'bigint', name: 'LetterRef' })
  letterRef: number;

  @Column({ type: 'bigint', name: 'RelatedLetterRef' })
  relatedLetterRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}