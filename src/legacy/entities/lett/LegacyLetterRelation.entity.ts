import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LetterRelation' })
export class LegacyLetterRelation {
  @PrimaryColumn({ type: 'bigint', name: 'LetterRelationID' })
  letterRelationID: number;

  @Column({ type: 'bigint', name: 'SourceLetterRef' })
  sourceLetterRef: number;

  @Column({ type: 'bigint', name: 'TargetLetterRef' })
  targetLetterRef: number;

  @Column({ type: 'bigint', name: 'TypeRef' })
  typeRef: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}