import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DocumentTemplateField' })
export class LegacyDocumentTemplateField {
  @PrimaryColumn({ type: 'bigint', name: 'DocumentTemplateFieldID' })
  documentTemplateFieldID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Path', nullable: true })
  path: string | null;

  @Column({ type: 'boolean', name: 'AssignToHeader', nullable: true })
  assignToHeader: boolean | null;

  @Column({ type: 'character varying', name: 'ContentFieldName', nullable: true })
  contentFieldName: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'TypeCode' })
  typeCode: number;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'boolean', name: 'Required', nullable: true })
  required: boolean | null;

  @Column({ type: 'boolean', name: 'ReadOnly', nullable: true })
  readOnly: boolean | null;

  @Column({ type: 'integer', name: 'MinValue', nullable: true })
  minValue: number | null;

  @Column({ type: 'integer', name: 'MaxValue', nullable: true })
  maxValue: number | null;

  @Column({ type: 'integer', name: 'MaxLength', nullable: true })
  maxLength: number | null;

  @Column({ type: 'bigint', name: 'DocumentTemplateRef', nullable: true })
  documentTemplateRef: number | null;

  @Column({ type: 'bigint', name: 'DocumentTemplateDetailRef', nullable: true })
  documentTemplateDetailRef: number | null;

  @Column({ type: 'boolean', name: 'Searchable', default: false })
  searchable: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}