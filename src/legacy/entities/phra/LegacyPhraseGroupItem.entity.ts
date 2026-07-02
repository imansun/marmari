import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PhraseGroupItem' })
export class LegacyPhraseGroupItem {
  @PrimaryColumn({ type: 'bigint', name: 'PhraseGroupItemID' })
  phraseGroupItemID: number;

  @Column({ type: 'character varying', name: 'Code', nullable: true })
  code: string | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Path' })
  path: string;

  @Column({ type: 'bigint', name: 'PhraseGroupRef' })
  phraseGroupRef: number;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'numeric', name: 'Coefficient' })
  coefficient: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}