import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Document' })
export class LegacyDocument {
  @PrimaryColumn({ type: 'bigint', name: 'DocumentID' })
  documentID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'EntityCode', nullable: true })
  entityCode: number | null;

  @Column({ type: 'bigint', name: 'EntityRef', nullable: true })
  entityRef: number | null;

  @Column({ type: 'bigint', name: 'OrganizerRef', nullable: true })
  organizerRef: number | null;

  @Column({ type: 'bigint', name: 'ShortcutOf', nullable: true })
  shortcutOf: number | null;

  @Column({ type: 'bigint', name: 'DocumentTemplateRef', nullable: true })
  documentTemplateRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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