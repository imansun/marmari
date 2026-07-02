import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DocumentField' })
export class LegacyDocumentField {
  @PrimaryColumn({ type: 'bigint', name: 'DocumentFieldID' })
  documentFieldID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'TypeCode' })
  typeCode: number;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'character varying', name: 'FileName', nullable: true })
  fileName: string | null;

  @Column({ type: 'uuid', name: 'ContentGuid', nullable: true })
  contentGuid: string | null;

  @Column({ type: 'character varying', name: 'FileExtension', nullable: true })
  fileExtension: string | null;

  @Column({ type: 'bigint', name: 'DocumentRef', nullable: true })
  documentRef: number | null;

  @Column({ type: 'bigint', name: 'DocumentDetailRef', nullable: true })
  documentDetailRef: number | null;

  @Column({ type: 'bigint', name: 'DocumentTemplateFieldRef', nullable: true })
  documentTemplateFieldRef: number | null;

  @Column({ type: 'boolean', name: 'Searchable', default: false })
  searchable: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}