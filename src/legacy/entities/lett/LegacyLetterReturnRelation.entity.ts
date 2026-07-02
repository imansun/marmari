import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LetterReturnRelation' })
export class LegacyLetterReturnRelation {
  @PrimaryColumn({ type: 'bigint', name: 'LetterReturnRelationID' })
  letterReturnRelationID: number;

  @Column({ type: 'bigint', name: 'LetterRef' })
  letterRef: number;

  @Column({ type: 'bigint', name: 'RelatedLetterRef' })
  relatedLetterRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}