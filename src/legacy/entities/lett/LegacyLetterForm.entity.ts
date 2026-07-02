import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LetterForm' })
export class LegacyLetterForm {
  @PrimaryColumn({ type: 'bigint', name: 'LetterFormID' })
  letterFormID: number;

  @Column({ type: 'bigint', name: 'LetterRef' })
  letterRef: number;

  @Column({ type: 'bigint', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'bigint', name: 'EntityRef' })
  entityRef: number;

  @Column({ type: 'character varying', name: 'Title', nullable: true })
  title: string | null;

  @Column({ type: 'character varying', name: 'ComponentName', nullable: true })
  componentName: string | null;

  @Column({ type: 'character varying', name: 'EntityName', nullable: true })
  entityName: string | null;

  @Column({ type: 'character varying', name: 'EntityTitle', nullable: true })
  entityTitle: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}